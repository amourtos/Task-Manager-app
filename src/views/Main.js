import React from "react";
import Logout from "../logout/Logout";
import { useStore } from "../store/store";
import TodoList from "../todoList/todoList";
import Home from "./home";

const Main = () => {
  const user = useStore((state) => state.user);
  return (
    <div class="main-page">
      <Home />
      {user.token ? <TodoList /> : null}
      {user.token ? <Logout /> : null}
    </div>
  );
};

export default Main;
