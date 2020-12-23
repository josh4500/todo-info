import React from "react";
import TodoList from "./TodoList";
import edit from "../icons/edit.png";
import ndelete from "../icons/delete.png";
import share from "../icons/share.png";

const Note = ({ noteNode, noteFunctions }) => {
  let date =
    new Date(noteNode.date).toDateString() +
    " " +
    new Date(noteNode.date).toLocaleTimeString();
  return (
    <div className="note">
      <div className="note-controls">
        <div className="date">{date}</div>
        <img
          className="edit note-btn"
          src={edit}
          width="16px"
          height="16px"
          alt=""
        />
        <img
          className="share note-btn"
          src={share}
          width="16px"
          height="16px"
          alt=""
        />
        <img
          className="delete note-btn"
          src={ndelete}
          width="16px"
          height="16px"
          alt=""
          onClick={() => noteFunctions.deleteNote(noteNode._id)}
        />
      </div>
      <div className="noteContent">
        <div className="desc">{noteNode.description}</div>
        {noteNode.isTodo ? (
          <TodoList
            noteid={noteNode._id}
            toggleCheck={noteFunctions.checkTodo}
            todoList={noteNode.todoList}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Note;
