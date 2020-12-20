import React from "react";
import Note from "./Note";
import "../css/notePage.css";

const NotePage = ({ notes, theme }) => (
  <div id="notePage">
    <div id="head">
      <div>Note</div>
    </div>
    <div id="body">
      {notes.notes.map((note, index) => (
        <Note noteNode={note} index={index} key={index} />
      ))}
      {console.log(notes)}
    </div>
  </div>
);

export default NotePage;
