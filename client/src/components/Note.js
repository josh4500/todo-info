import React from "react";

const Note = ({ noteNode }) => (
  <div id="note">
    <div className="date"></div>
    <button id="edit" className="note-btn"></button>
    <button id="share" className="note-btn"></button>
    <button id="delete" className="note-btn"></button>
    <div className="noteContent"></div>
  </div>
);
export default Note;
