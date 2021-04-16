import React, { useEffect, useState } from "react";
import { getMyTodos } from "../fetch/fetch";
import { useStore } from "../store/store";
import TodoItem from "../todoItem/todoItem";

function TodoList(props) {
  const user = useStore((state) => state.user);
  const [dontMatter, setDontMatter] = useState(0);
  const [todoList, setTodoList] = useState([]);
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
        {todoList.map((props) => (
          <TodoItem
            key={props._id}
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
      </ul>
    </section>
  );
}

export default TodoList;
