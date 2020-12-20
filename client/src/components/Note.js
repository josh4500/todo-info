import React from "react";
import TodoList from "./TodoList";

const Note = ({ noteNode, index }) => (
  <div id="note">
    <div className="date">{Date.parse(noteNode.date)}</div>
    <button id="edit" className="note-btn"></button>
    <button id="share" className="note-btn"></button>
    <button id="delete" className="note-btn"></button>
    <div className="noteContent">
      <div id="desc">{noteNode.description}</div>
      {noteNode.isTodo ? "" : ""}
      {/* <TodoList todoList = {noteNode.todoList} /> */}
    </div>
  </div>
);
export default Note;
