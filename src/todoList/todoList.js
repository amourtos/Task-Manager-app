import React, { useEffect, useState } from "react";
import { getMyTodos, toggleComplete } from "../fetch/fetch";
import { GET_TODOLIST, TOGGLE_COMPLETE, useStore } from "../store/store";
import TodoItem from "../todoItem/todoItem";

function TodoList(props) {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);
  const store = useStore();
  const [todoList, setTodoList] = useState([]);

  function toggleCompleted(event, id) {
    toggleComplete(user.token, id).then((data) => console.log(data));
  }

  useEffect(() => {
    setTodoList(
      getMyTodos(user.token).then((potatoes) => {
        dispatch({ type: GET_TODOLIST, payload: potatoes });
      })
    );
  }, []);

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
              _id={props._id}
            />
          ))}
        <TodoItem />
      </ul>
    </section>
  );
}

export default TodoList;
