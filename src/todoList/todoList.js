import React, { useEffect } from "react";
import { getMyTodos } from "../fetch/fetch";
import { GET_TODOLIST, useStore } from "../store/store";
import TodoItem from "../todoItem/todoItem";

function TodoList(props) {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);
  const store = useStore();
  // let test = user.user.tasks.map((ele) => ele.title);
  // console.log(test);
  // console.log(user.user.tasks);
  useEffect(() => {
    getMyTodos(user.token).then((potatoes) => {
      dispatch({ type: GET_TODOLIST, payload: potatoes });
    });
  }, [dispatch, store.user.todos]);

  return (
    <section className="main">
      <h3>Todo List</h3>
      <ul className="todo-list">
        {store.todos &&
          store.todos.map((props) => (
            <TodoItem
              title={props.title}
              details={props.details}
              completed={props.completed}
              dueDate={props.dueDate}
              createdAt={props.createdAt}
              category={props.category}
              id={props.id}
            />
          ))}
        <TodoItem />
      </ul>
    </section>
  );
}

export default TodoList;
