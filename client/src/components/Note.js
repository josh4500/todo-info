import React from "react";
import TodoList from "./TodoList";

const Note = ({ noteNode, index }) => (
  <div className="note">
    <div className="note-controls">
      <div className="date">{Date.parse(noteNode.date)}</div>
      <button className="edit note-btn"></button>
      <button className="share note-btn"></button>
      <button className="delete note-btn"></button>
    </div>
    <div className="noteContent">
      <div id="desc">{noteNode.description}</div>
      {noteNode.isTodo ? <TodoList todoList={noteNode.todoList} /> : ""}
    </div>
  </div>
);
export default Note;
