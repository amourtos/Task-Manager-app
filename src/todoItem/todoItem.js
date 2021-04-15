import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { useStore } from "../store/store";
import { deleteTodo, toggleComplete, getMyTodos, getTodo } from "../fetch/fetch";

function TodoItem(props) {
  const user = useStore((state) => state.user);
  const [todo, setTodo] = useState({});

  const toggleCompleted = async () => {
    await toggleComplete(user.token, props._id);
    const newTodo = await getTodo(user.token, props._id);
    setTodo(newTodo);
    console.log(todo);
    // props.updateMatter(Math.random());
  };

  const deleteTodoFunction = async () => {
    await deleteTodo(user.token, props._id);
    const newTodo = await getTodo(user.token, props._id);
    setTodo(newTodo);
    await getMyTodos(user.token).then((data) => console.log(data));
    props.updateMatter(Math.random());
  };

  useEffect(() => {
    const someBullShit = async () => {
      const updatedTodo = await getTodo(user.token, props._id).catch((err) => console.log(err));
      setTodo(updatedTodo);
    };
    someBullShit();
  }, [user]);

  return (
    <div className="todoItem">
      {todo === null ? (
        <div></div>
      ) : (
        <li>
          <Card title={<h3>{todo.title}</h3>} style={{ width: 300 }}>
            <p>details: {todo.details}</p>
            <p>createdAt: {todo.createdAt}</p>
            <p>dueDate: {todo.dueDate}</p>
            <p>completed: {todo.completed === true ? "completed" : "Not Completed"}</p>

            <Button type="primary" shape="circle" onClick={toggleCompleted}>
              Toggle Complete
            </Button>

            <Button type="primary" shape="circle" onClick={deleteTodoFunction}>
              Delete
            </Button>
          </Card>
        </li>
      )}
    </div>
  );
}

export default TodoItem;
