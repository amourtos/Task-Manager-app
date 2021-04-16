import React from "react";
import CreateTodo from "../createTodo/createTodo";
import TodoItem from "../todoItem/todoItem";
import TodoList from "../todoList/todoList";

const Main = () => {
  return (
    <div>
      <h3>create to do component</h3>
      <TodoList />

      <h3>off to the left nav bar component</h3>
    </div>
  );
};

export default Main;
