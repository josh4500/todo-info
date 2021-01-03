import React, { useEffect, useState } from "react";
import Authentication from "./Authentication";
import { UserProfile, NotePage, Settings, NoteEditor } from "./components";
import "./css/index.css";
import * as Helper from "./helper";
import "./css/app.css";

const App = () => {
  const [user, setUser] = useState({ active: false, data: {} });
  const [notes, setNotes] = useState([]);
  const [theme, setTheme] = useState({});
  const [sett, togSett] = useState(false);
  const [noteEdit, setNoteEdit] = useState({
    display: false,
    noteContent: {},
    isEdit: false,
  });

  useEffect(() => {
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
      setTheme({});
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
        localStorage.setItem("note_app_token", data.token);
        setUser({ active: true, data: data.data });
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
    ).then(() =>
      setNotes([
        ...notes.map((note) => {
          if (note._id === noteid) {
            note.todoList[index].checked = !note.todoList[index].checked;
          }
          return note;
        }),
      ])
    );
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
  const bg_blur_zIndex = sett || noteEdit.display ? 98 : -100;
  const updateProfile = (data) => {
    Helper.patchData(`/user/updateUser/${user.data.userid}`, data).then(() =>
      setUser((prevState) => ({ ...prevState, data }))
    );
  };
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
  };

  return user.active ? (
    <>
      {/* <div id="loading-screen"></div> */}
      <div id="app">
        <UserProfile
          user={user}
          notes={notes}
          theme={theme}
          toggleSettings={() => {
            sett === false ? togSett(true) : togSett(false);
          }}
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
          background: "#19202e",
          zIndex: bg_blur_zIndex,
          filter: "blur(200px)",
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
      <Authentication control={{ login, signup }} />
    </div>
  );
};

export default App;
