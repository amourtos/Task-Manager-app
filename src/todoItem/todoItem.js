import React from "react";
import todoList from "../todo.json";

function TodoItem(props) {
  return (
    <ul className="List">
      <div className="todoItem">
        <h2>Todo List</h2>
        <ul>{todoList[0].title}</ul>
        <ul>{todoList[1].title}</ul>
        <ul>{todoList[2].title}</ul>
        <ul>{todoList[3].title}</ul>
      </div>
    </ul>
  );
}

export default TodoItem;
