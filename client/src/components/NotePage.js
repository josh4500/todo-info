import React from "react";
import Note from "./Note";
import "../css/notePage.css";

const NotePage = ({ notes, theme, noteFunctions, toggleNoteEdit }) => {
  // const nLen = notes.length;
  // let gridShape = [];
  // let m = 0;
  // for (let i = 0; i < nLen; i++) {
  //   let row = [];
  //   for (let j = 0; j < 4 && m < nLen; j++) {
  //     row[j] = 0;
  //     m += 1;
  //     gridShape[i] = row;
  //   }
  // }
  return (
    <div id="notePage">
      <div id="head">
        <div>Note</div>
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
