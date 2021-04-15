import React, { useEffect, useImperativeHandle, useState } from "react";
import { getMyTodos, toggleComplete } from "../fetch/fetch";
import { GET_TODOLIST, TOGGLE_COMPLETE, useStore } from "../store/store";
import TodoItem from "../todoItem/todoItem";

function TodoList(props) {
  const user = useStore((state) => state.user);
  // const dispatch = useStore((state) => state.dispatch);
  // const store = useStore();
  const [dontMatter, setDontMatter] = useState(0);
  const [todoList, setTodoList] = useState([]);
  // const token = window.localStorage.user.slice(10, -2);
  // console.log(window.localStorage.user.slice(10, -2));
  useEffect(() => {
    const something = async () => {
      const todos = await getMyTodos(user.token)
        .then((data) => setTodoList(data))
        .catch((err) => console.log(err));
    };
    something();
  }, [dontMatter]);

  return (
    <section className="main">
      <h3>Todo List</h3>
      <ul className="todo-list">
        {todoList &&
          todoList.map((props) => (
            <TodoItem
              updateMatter={setDontMatter}
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
