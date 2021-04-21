import React from "react";
import Logout from "../components/login/logout/Logout";
import { useStore } from "../store/store";
import TodoList from "../components/todoList/todoList";
import Home from "./Home";

const Main = () => {
  const user = useStore((state) => state.user);
  return (
    <div>
      <Home />
      {user.token ? <Logout /> : null}
      {user.token ? <TodoList /> : null}
      {/* {user.token ? <Navbar /> : null} */}
    </div>
  );
};

export default Main;
