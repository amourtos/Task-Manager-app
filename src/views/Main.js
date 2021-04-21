import React from "react";
import Logout from "../components/logout/Logout";
import { useStore } from "../store/store";
import TodoList from "../components/todoList/todoList";
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
