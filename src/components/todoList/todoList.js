import React, { useEffect, useState } from "react";
import { getMyTodos } from "../../fetch/fetch";
import { useStore } from "../../store/store";
import TodoItem from "../todoItem/todoItem";
import InputTask from "../createTodo/InputTask";

function TodoList(props) {
  const user = useStore((state) => state.user);
  const [dontMatter, setDontMatter] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const something = async () => {
    const todos = await getMyTodos(user.token);
    setTodoList(todos);
    console.log(todos);
  };
  useEffect(() => {
    something();
  }, [dontMatter]);

  return (
    <section className="main">
      {user.token ? <InputTask something={something} updateMatter={setDontMatter} /> : null}
      <h3>Todo List</h3>

      <ul className="todo-list">
        {todoList.map((props) => (
          <TodoItem
            something={something}
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
