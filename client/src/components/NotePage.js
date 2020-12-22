import React from "react";
import Note from "./Note";
import "../css/notePage.css";

const NotePage = ({ notes, theme }) => (
  <div id="notePage">
    <div id="head">
      <div>Note</div>
    </div>
    <div id="body">
      {notes.map((note, index) => (
        <Note noteNode={note} key={index} />
      ))}
    </div>
  </div>
);

export default NotePage;
