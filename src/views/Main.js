import userEvent from "@testing-library/user-event";
import React from "react";
import CreateTodo from "../createTodo/createTodo";
import Logout from "../logout/Logout";
import { useStore } from "../store/store";
import TodoList from "../todoList/todoList";
import Home from "./home";

const Main = () => {
  const user = useStore((state) => state.user);
  return (
    <div>
      <Home />
      {user.token ? <Logout /> : null}
      {user.token ? <CreateTodo /> : null}
      {user.token ? <TodoList /> : null}
      <h3>NAV BAR STUFF</h3>
    </div>
  );
};

export default Main;
