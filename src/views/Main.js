import React from "react";
import Logout from "../logout/Logout";
import Navbar from "../Navbar/Navbar";
import { useStore } from "../store/store";
import TodoList from "../todoList/todoList";
import Home from "./home";

const Main = () => {
  const user = useStore((state) => state.user);
  return (
    <div>
      <Home />
      {user.token ? <Logout /> : null}
      {user.token ? <TodoList /> : null}
      {user.token ? <Navbar /> : null}
    </div>
  );
};

export default Main;
