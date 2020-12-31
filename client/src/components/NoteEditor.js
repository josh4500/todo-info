import React, { useEffect, useState } from "react";
import closeIcon from "../icons/close_window.png";
import add from "../icons/add.png";
import remove from "../icons/remove.png";
import done from "../icons/done.png";
import not_done from "../icons/not_done.png";

const NoteEditor = ({ editable, toggleNoteEdit, noteControls }) => {
  const [todo, setTodo] = useState({ todo: "", checked: false });
  const [todoInput, setTodoInput] = useState([]);
  const [note, setNote] = useState({
    title: "",
    description: "",
    isTodo: false,
    todoList: [],
  });
  const [tileColor, setTileColor] = useState([]);
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

  const addTileColor = () => {
    setTileColor((prevState) => [
      ...prevState,
      ["purple", "red", "rebeccapurple"][Math.floor(Math.random() * 3)],
    ]);
  };

  const onChange = (e) => {
    setNote((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (editable.isEdit) {
      noteControls.modifyNote(note._id, note);
      console.log("hey");
    }
    toggleNoteEdit();
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
                    if (todo.todo) {
                      setTodoInput((prevstate) => [...prevstate, todo]);
                      setNote((prevState) => ({
                        ...prevState,
                        todoList: [...prevState.todoList, todo],
                      }));
                      addTileColor();
                      setTodo({ todo: "", checked: false });
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div id="addedList">
            {note.todoList.map((todoItem, index) => {
              return (
                <div
                  className="todo-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "5px",
                    marginBottom: "5px",
                    fontSize: "12px",
                    background: ["rebeccapurple", "purple", "red", "lightblue"][
                      Math.floor(Math.random() * 4)
                    ],
                    padding: "0 5px",
                    borderRadius: "10px",
                  }}
                  key={index}
                >
                  <div className="todo-check-btn todo-item-control">
                    <img
                      src={todoItem.checked ? done : not_done}
                      alt="Check"
                      title="Check Todo"
                      style={{
                        height: "25px",
                        width: "25px",
                        paddingTop: "5px",
                      }}
                      onClick={() =>
                        setNote((state) => {
                          var chgn = state.todoList.map((_t, i) => {
                            if (index === i) {
                              return { ..._t, checked: !_t.checked };
                            }
                            return _t;
                          });
                          return { ...state, todoList: [...chgn] };
                        })
                      }
                    />
                  </div>
                  <div
                    style={{ margin: "0 5px" }}
                    onClick={() => setTodo({ ...todoItem })}
                  >
                    {todoItem.todo}
                  </div>
                  <div className="todo-remove-btn todo-item-control">
                    <img
                      src={remove}
                      alt="Remove"
                      title="Remove Todo"
                      style={{
                        height: "25px",
                        width: "25px",
                        paddingTop: "5px",
                      }}
                      onClick={() => {
                        setNote((state) => {
                          var chgn = state.todoList.filter(
                            (_t, i) => index !== i
                          );
                          return { ...state, todoList: [...chgn] };
                        });
                      }}
                    />
                  </div>
                </div>
              );
            })}
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
