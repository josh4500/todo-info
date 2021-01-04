import React from "react";
import Note from "./Note";
import "../css/notePage.css";

const NotePage = ({ notes, theme, noteFunctions, toggleNoteEdit }) => {
  return (
    <div id="notePage">
      <div id="head">
        <div></div>
      </div>
      <div id="body">
        {notes.map((note, index) => {
          return (
            <Note
              noteNode={note}
              key={index}
              noteFunctions={noteFunctions}
              toggleNoteEdit={toggleNoteEdit}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NotePage;
