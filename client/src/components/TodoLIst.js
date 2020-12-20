import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList }) => {
  return (
    <div className="todoList">
      {todoList.map((todo) => (
        <Todo todo={todo.todo} isDone={todo.checked} />
      ))}
    </div>
  );
};

export default TodoList;
