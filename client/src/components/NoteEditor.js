import React, { useEffect, useState } from "react";
import closeIcon from "../icons/close_window.png";
import add from "../icons/add.png";
import remove from "../icons/remove.png";

const NoteEditor = ({ editable, toggleNoteEdit }) => {
  const [todo, setTodo] = useState({ todo: "", checked: false });
  const [todoInput, setTodoInput] = useState([]);
  const [note, setNote] = useState({
    title: "",
    description: "",
    isTodo: false,
    todoList: [],
  });
  useEffect(() => {
    editable.isEdit
      ? setNote(editable.noteContent)
      : setNote({
          title: "",
          description: "",
          isTodo: false,
          todoList: [],
        });
    editable.noteContent.isTodo
      ? setTodoInput(editable.noteContent.todoList)
      : setTodoInput([]);
  }, [editable.noteContent, editable.isEdit]);

  const opacity = editable.display ? 1 : 0;
  const transform = editable.display ? "scale(1)" : "scale(0.5)";
  const zIndex = editable.display ? 99 : -101;

  const onChange = (e) => {
    setNote((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(todoInput);
    console.log(note);
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
        <input
          type="text"
          name="title"
          placeholder="What's it about"
          value={note.title}
          onChange={onChange}
        />
        <textarea
          style={{ resize: "none" }}
          name="description"
          placeholder="Enter your notes"
          value={note.description}
          onChange={onChange}
        ></textarea>
        <div id="todo-manu">
          <div id="addTodo">
            <div>ADD TODO</div>
            <input
              id="todoInput"
              type="text"
              placeholder="Enter new todo item"
              value={todo.todo}
              onChange={(e) =>
                setTodo((prev) => ({ ...prev, todo: e.target.value }))
              }
            />
            <div>
              <div>
                <img
                  id="todo-add-btn"
                  src={add}
                  alt="Add Todo"
                  title="Add Todo"
                  style={{ height: "25px", width: "25px", paddingTop: "5px" }}
                  onClick={() => {
                    if (!note.isTodo)
                      setNote((prevState) => ({ ...prevState, isTodo: true }));
                    setTodoInput((prevstate) => [...prevstate, todo]);
                    setNote((prevState) => ({
                      ...prevState,
                      todoList: [...prevState.todoList, todo],
                    }));
                    setTodo({ todo: "", checked: false });
                  }}
                />
              </div>
            </div>
          </div>
          <div id="addedList">
            {note.todoList.map((todoItem, index) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "5px",
                }}
                key={index}
              >
                <div style={{ marginRight: "5px" }}>{todoItem.todo}</div>
                <div>
                  <img
                    src={remove}
                    alt="Remove"
                    title="Remove Todo"
                    style={{ height: "25px", width: "25px", paddingTop: "5px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          id="edit-note-btn"
          className="action-btn green-action"
        >
          {editable.isEdit ? "Update" : "Add New Note"}
        </button>
      </form>
    </div>
  );
};
export default NoteEditor;
