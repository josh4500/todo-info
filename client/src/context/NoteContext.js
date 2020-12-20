import React from "react";

const NoteContext = React.createContext();

export const NoteProvider = ({ children }) => {
  const testData = [
    {
      _id: "5fc52c63923593276414d461",
      userid: "davinci4500",
      description: "Hey our unknown todo",
      title: "Mubarack",
      isTodo: false,
      todoList: [
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
          checked: false,
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
          checked: false,
        },
      ],
      date: "2020-12-01T14:06:09.993Z",
      __v: 0,
    },
  ];
  return (
    <NoteContext.Provider value={{ notes: testData }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
