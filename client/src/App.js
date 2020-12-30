import React, { useEffect, useState } from "react";
import Authentication from "./Authentication";
import { UserProfile, NotePage, Settings, NoteEditor } from "./components";
import "./css/index.css";
import * as Helper from "./helper";
import "./css/app.css";

const App = () => {
  const [user, setUser] = useState({ active: false, data: {} });
  const [notes, setNotes] = useState([
    {
      _id: "5fc52c63923593276414d4611",
      userid: "davinci4500",
      description:
        "Hey our unknown todo i just want this to be a very long sentence more longer than what I wrote last time",
      title: "Mubarack",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
      ],
      date: "2020-11-30T17:31:15.533Z",
      __v: 0,
    },
    {
      _id: "5fc52c63923593276414d4612",
      userid: "davinci4500",
      description:
        "Hey our unknown todo i just want this to be a very long sentence more longer than what I wrote last time",
      title: "Mubarack",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
      ],
      date: "2020-11-30T17:31:15.533Z",
      __v: 0,
    },
    {
      _id: "5fc52c63923593276414d4613",
      userid: "davinci4500",
      description:
        "Hey our unknown todo i just want this to be a very long sentence more longer than what I wrote last time",
      title: "Mubarack",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
      ],
      date: "2020-11-30T17:31:15.533Z",
      __v: 0,
    },
    {
      _id: "5fc52c63923593276414d4614",
      userid: "davinci4500",
      description:
        "Hey our unknown todo i just want this to be a very long sentence more longer than what I wrote last time",
      title: "Mubarack",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
      ],
      date: "2020-11-30T17:31:15.533Z",
      __v: 0,
    },
    {
      _id: "5fc52c63923593276414d4615",
      userid: "davinci4500",
      description:
        "Hey our unknown todo i just want this to be a very long sentence more longer than what I wrote last time",
      title: "Mubarack",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
      ],
      date: "2020-11-30T17:31:15.533Z",
      __v: 0,
    },
    {
      _id: "5fc52c63923593276414d4616",
      userid: "davinci4500",
      description:
        "Hey our unknown todo i just want this to be a very long sentence more longer than what I wrote last time",
      title: "Mubarack",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
      ],
      date: "2020-11-30T17:31:15.533Z",
      __v: 0,
    },
    {
      _id: "5fc52c63923593276414d4617",
      userid: "davinci4500",
      description:
        "Hey our unknown todo i just want this to be a very long sentence more longer than what I wrote last time",
      title: "Mubarack",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
      ],
      date: "2020-11-30T17:31:15.533Z",
      __v: 0,
    },
    {
      _id: "5fc6466eb12ed22370774a5e8",
      userid: "davinci4500",
      description: "Hey our first todo",
      title: "A test data",
      isTodo: true,
      todoList: [
        {
          _id: "5fc6466eb12ed22370774a5f",
          todo: "Going back to church",
          checked: false,
        },
      ],
      date: "2020-12-01T13:34:38.616Z",
      __v: 0,
    },
    {
      _id: "5fc64671b12ed22370774a609",
      userid: "davinci4500",
      description: "Hey our first todo",
      title: "A test data",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64671b12ed22370774a61",
          todo: "Going back to church",
          checked: true,
        },
      ],
      date: "2020-12-01T13:34:41.595Z",
      __v: 0,
    },
    {
      _id: "5fc64dd1522d243b10d358ee10",
      userid: "davinci4500",
      description: "Hey our first todo",
      title: "A test data",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64dd1522d243b10d358ef",
          todo: "Going back to church",
          checked: true,
        },
      ],
      date: "2020-12-01T14:06:09.993Z",
      __v: 0,
    },
    {
      _id: "5fc64dd1522d243b10d358ee11",
      userid: "davinci4500",
      description: "Hey our first todo",
      title: "A test data",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64dd1522d243b10d358ef",
          todo: "Going back to church",
          checked: true,
        },
      ],
      date: "2020-12-01T14:06:09.993Z",
      __v: 0,
    },
    {
      _id: "5fc52c63923593276414d46112",
      userid: "davinci4500",
      description:
        "Hey our unknown todo i just want this to be a very long sentence more longer than what I wrote last time",
      title: "Mubarack",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
      ],
      date: "2020-11-30T17:31:15.533Z",
      __v: 0,
    },
    {
      _id: "5fc52c63923593276414d46113",
      userid: "davinci4500",
      description:
        "Hey our unknown todo i just want this to be a very long sentence more longer than what I wrote last time",
      title: "Mubarack",
      isTodo: true,
      todoList: [
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
        {
          _id: "5fc64666b12ed22370774a5d",
          todo: "Going back to church",
          checked: false,
        },
      ],
      date: "2020-11-30T17:31:15.533Z",
      __v: 0,
    },
  ]); //A structure of a User NoteList
  const [theme, setTheme] = useState({});
  const [sett, togSett] = useState(false);
  const [noteEdit, setNoteEdit] = useState({
    display: false,
    noteContent: {},
    isEdit: "false",
  });

  useEffect(() => {
    // console.log(user.active);
    if (user.active) {
    }
  }, [user, notes]);
  const login = (loginDetails) => {
    //TODO
    setUser({ active: true, data: { ...loginDetails } });
  };
  const logout = (userid) => {
    //TODO
    if (userid === user.data.userid) setUser({ active: false, data: {} });
  };
  const addNote = (note) => {
    //TODO
    setNotes((prevNotes) => [...prevNotes, note]);
  };
  const deleteNote = (noteid) => {
    //TODO
    setNotes([...notes.filter((note) => note._id !== noteid)]);
  };

  const checkTodo = (noteid, index) => {
    //TODO
    setNotes([
      ...notes.map((note) => {
        if (note._id === noteid) {
          note.todoList[index].checked = !note.todoList[index].checked;
          console.log(note);
        }
        return note;
      }),
    ]);
  };
  const modifyNote = (noteid, newTodo) => {
    setNotes([
      ...notes.map((note) => {
        if (note._id === noteid) {
          return { ...note, ...newTodo };
        }
        return note;
      }),
    ]);
  };
  const bg_blur_zIndex = sett ? 98 : -100;
  const updateProfile = (data) => {
    return setUser((prevState) => ({ ...prevState, data }));
  };

  return user.active ? (
    <>
      <div id="app">
        <UserProfile
          user={user}
          notes={notes}
          theme={theme}
          toggleSettings={() => {
            sett === false ? togSett(true) : togSett(false);
          }}
        />
        <NotePage
          notes={notes}
          theme={theme}
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
      <NoteEditor note={notes} toggle={noteEdit} />
    </>
  ) : (
    <div id="authenticate">
      <Authentication control={{ login }} />
    </div>
  );
};

export default App;
