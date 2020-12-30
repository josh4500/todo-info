import React, { useState } from "react";
import closeIcon from "../icons/close_window.png";

const NoteEditor = ({ toggle, toggleNoteEdit }) => {
  const opacity = toggle.display ? 1 : 0;
  const transform = toggle.display ? "scale(1)" : "scale(0.5)";
  const zIndex = toggle.display ? 99 : -101;

  const [nTodo, setNumTodo] = useState(1);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="note-editor" style={{ opacity, transform, zIndex }}>
      <img
        src={closeIcon}
        style={{
          height: "30px",
          width: "30px",
          position: "absolute",
          right: "30px",
          top: "15px",
          cursor: "pointer",
        }}
        alt="Close Window"
        title="Close Window"
        onClick={toggleNoteEdit}
      />
      <form
        id="note-editor-form"
        style={{ height: "100%", width: "100%" }}
        method="POST"
        onSubmit={onSubmit}
      >
        <input />
        <button id="edit-note-btn" className="action-btn green-action">
          {toggle.isEdit ? "Update" : "Add New Note"}
          {console.log(toggle)}
        </button>
      </form>
    </div>
  );
};
export default NoteEditor;
