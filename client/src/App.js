import React, { useEffect, useState } from "react";
import Authentication from "./Authentication";
import { UserProfile, NotePage, Settings, NoteEditor } from "./components";
import * as Helper from "./helper";
import draw from "./icons/draw.png";
import "./css/index.css";
import "./css/app.css";

const App = () => {
  const [user, setUser] = useState({ active: false, data: {} });
  const [notes, setNotes] = useState([]);
  const [theme, setTheme] = useState({ dark: true });
  const [sett, togSett] = useState(false);
  const [noteEdit, setNoteEdit] = useState({
    display: false,
    noteContent: {},
    isEdit: false,
  });

  useEffect(() => {
    //Check localstrorage if user already saved a preferred theme
    const themeValue = localStorage.getItem("note_app_theme");
    setTheme(themeValue ? JSON.parse(themeValue) : { dark: true });

    //If user does not have default theme stored. Set to default value
    if (!themeValue) {
      localStorage.setItem("note_app_theme", JSON.stringify({ dark: true }));
    }

    //Check if JWT token is save on browser for automatic login
    Helper.getData(
      "/user/getUser/",
      localStorage.getItem("note_app_token") || null
    ).then((data) => {
      if (data.success) {
        setUser({ active: true, data: data.data });
      }
    });
  }, []);

  useEffect(() => {
    if (user.active) {
      Helper.getData(`/todo/${user.data.userid}/`).then((data) =>
        setNotes(data)
      );
    }
  }, [user]);
  const signup = (signupDetails) => {
    Helper.postData("/user/addUser", signupDetails).then((data) => {
      if (data.success) setUser({ active: true, data: data.addNewUser });
    });
  };
  const login = (loginDetails) => {
    Helper.postData("/user/getUser", loginDetails).then((data) => {
      if (data.success) {
        setUser({ active: true, data: data.data });
        localStorage.setItem("note_app_token", data.token);
        return true;
      }
    });
  };
  const logout = (userid) => {
    if (userid === user.data.userid) {
      setUser({ active: false, data: {} });
      localStorage.removeItem("note_app_token");
      setNotes([]);
      togSett(false);
    }
  };
  const addNote = (note) => {
    Helper.postData("/todo/addTodo", {
      userid: user.data.userid,
      ...note,
    }).then((data) => setNotes((prevNotes) => [...prevNotes, data]));
  };
  const deleteNote = (noteid) => {
    Helper.deleteData(
      `/todo/delete/${user.data.userid}/${noteid}`
    ).then((data) =>
      setNotes([...notes.filter((note) => note._id !== noteid)])
    );
  };

  const checkTodo = (noteid, index) => {
    const newNote = notes
      .filter((note) => note._id === noteid)
      .map((note) => {
        note.todoList[index].checked = !note.todoList[index].checked;
        return note;
      });
    Helper.postData(
      `/todo/update/${user.data.userid}/${noteid}`,
      newNote[0]
    ).then((data) => {
      setNotes([
        ...notes.map((note) => {
          if (note._id === noteid) {
            return data.data;
          }
          return note;
        }),
      ]);
    });
  };
  const modifyNote = (noteid, newTodo) => {
    Helper.postData(`/todo/update/${user.data.userid}/${noteid}`, newTodo).then(
      () =>
        setNotes([
          ...notes.map((note) => {
            if (note._id === noteid) {
              return { ...note, ...newTodo };
            }
            return note;
          }),
        ])
    );
  };
  const updateProfile = (data) => {
    Helper.patchData(`/user/updateUser/${user.data.userid}`, data).then(() =>
      setUser((prevState) => ({ ...prevState, data }))
    );
  };

  //Change or tog event of NoteEditor window either visible or hidden from user
  const toggleNoteEdit = (isEdit, noteContent) => {
    if (isEdit === true) {
      setNoteEdit((prevState) => ({
        ...prevState,
        display: true,
        isEdit: true,
        noteContent,
      }));
    } else {
      noteEdit.display === false
        ? setNoteEdit((prevState) => ({
            ...prevState,
            display: true,
            isEdit: false,
            noteContent: {},
          }))
        : setNoteEdit((prevState) => ({
            ...prevState,
            display: false,
            isEdit: false,
            noteContent: {},
          }));
    }
    //Make profile details close
    document.getElementById("toggleProfile").checked = false;

    //Set Note editor to default state if NoteEditor window is set true
    togSett(false);
  };

  //Change or tog event of settings window either visible or hidden from user
  const toggleSettings = () => {
    sett === false ? togSett(true) : togSett(false);
    //Make profile details close
    document.getElementById("toggleProfile").checked = false;

    //Set Note editor to default state if Settings window is set true
    setNoteEdit({
      display: false,
      noteContent: {},
      isEdit: false,
    });
  };

  const toggleTheme = (isDark) => {
    setTheme({ dark: isDark });
  };

  //Background blur for overlay window contents
  const bg_blur = sett || noteEdit.display ? true : false;

  return user.active ? (
    <>
      {/* <div id="loading-screen"></div> */}
      <div id="app">
        <input id="toggleProfile" style={{ display: "none" }} type="checkbox" />
        <label htmlFor="toggleProfile">
          <img
            id="profileToggleBar"
            src={draw}
            alt="Open Drawer"
            title="Draw"
          />
        </label>
        <UserProfile
          user={user}
          notes={notes}
          theme={theme}
          toggleTheme={toggleTheme}
          toggleSettings={toggleSettings}
          toggleNoteEdit={toggleNoteEdit}
        />
        <NotePage
          notes={notes}
          theme={theme}
          toggleNoteEdit={toggleNoteEdit}
          noteFunctions={{ deleteNote, checkTodo }}
        />
      </div>
      <div
        id="blur-bg"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          opacity: bg_blur ? 1 : 0,
          visibility: bg_blur ? "visible" : "hidden",
          backdropFilter: "blur(5px)",
          transition: "all 0.5s ease-in-out",
        }}
      ></div>
      <Settings
        user={user}
        notes={notes}
        toggle={sett}
        logout={logout}
        control={{ updateProfile }}
        toggleSettings={() => {
          sett === false ? togSett(true) : togSett(false);
        }}
      />
      <NoteEditor
        note={notes}
        editable={noteEdit}
        toggleNoteEdit={toggleNoteEdit}
        noteControls={{ modifyNote, addNote }}
      />
    </>
  ) : (
    <div id="authenticate">
      <Authentication user={user} control={{ login, signup }} />
    </div>
  );
};

export default App;
