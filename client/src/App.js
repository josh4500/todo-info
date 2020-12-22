import React, { useEffect, useState } from "react";
import Authentication from "./Authentication";
import { UserProfile, NotePage } from "./components";
import "./css/app.css";

const App = () => {
  // const [user, setUser] = useState({ active: false, data: {} });
  const [user, setUser] = useState({
    active: false,
    data: { username: "ajosh4500", email: "example@gmail.com" },
  });
  const [notes, setNotes] = useState([
    {
      _id: "5fc52c63923593276414d461",
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
      _id: "5fc6466eb12ed22370774a5e",
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
      _id: "5fc64671b12ed22370774a60",
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
      _id: "5fc64dd1522d243b10d358ee",
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
      _id: "5fc64dd1522d243b10d358ee",
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
      _id: "5fc52c63923593276414d461",
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
  useEffect(() => {}, [user, notes]);
  return user.active ? (
    <div id="app">
      <UserProfile user={user} notes={notes} theme={theme} />
      <NotePage notes={notes} theme={theme} />
    </div>
  ) : (
    <div id="authenticate">
      <Authentication user={user} />
    </div>
  );
};

export default App;
