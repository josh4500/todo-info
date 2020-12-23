import React, { useState } from "react";
import done from "../icons/done.png";
import not_done from "../icons/not_done.png";

const Todo = ({ noteid, index, todo, isDone, toggleCheck }) => {
  const [icon, setIcon] = useState(isDone);
  const onClick = () => {
    toggleCheck(noteid, index);
    setIcon(!isDone);
  };
  return (
    <div className="todo" onClick={onClick}>
      <img
        className={`is-done ${done}`}
        width="14px"
        height="14px"
        src={icon ? done : not_done}
        alt=""
      />
      <div className="todo-item">{todo}</div>
    </div>
  );
};
export default Todo;
