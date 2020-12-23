import React from "react";
import Todo from "./Todo";

const TodoList = ({ noteid, todoList, toggleCheck }) => {
  return (
    <div className="todoList">
      {todoList.map((todo, index) => (
        <Todo
          noteid={noteid}
          toggleCheck={toggleCheck}
          key={index}
          index={index}
          todo={todo.todo}
          isDone={todo.checked}
        />
      ))}
    </div>
  );
};

export default TodoList;
