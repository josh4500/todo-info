import React, { useEffect } from "react";
import Note from "./Note";
import "../css/notePage.css";

const NotePage = ({ notes, theme, noteFunctions, toggleNoteEdit }) => {
  useEffect(() => {
    document.getElementById("themeControl").checked = theme.dark;
  }, [theme]);
  return (
    <div id="notePage">
      <header id="head">
        <input id="themeControl" type="checkbox" />
        <label htmlFor="themeControl">
          <div id="toggleTheme"></div>
        </label>
      </header>
      <main id="body">
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
      </main>
    </div>
  );
};
export default NotePage;
