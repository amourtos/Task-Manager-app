import { useEffect } from "react";
import CreateTodo from "../createTodo/createTodo";
import { getMyTodos } from "../fetch/fetch";
import { GET_TODOLIST, useStore } from "../store/store";
import TodoItem from "../todoItem/todoItem";

function TodoList(props) {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);
  const store = useStore();

  useEffect(() => {
    getMyTodos(user.token).then((data) => {
      dispatch({ type: GET_TODOLIST, payload: data.messages });
    });
  }, [dispatch, store.TodoList]);

  return (
    <section className="main">
      <ul className="todo-list">
        <TodoItem />
      </ul>
    </section>
  );
}

export default TodoList;
