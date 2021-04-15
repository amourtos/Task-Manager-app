import React, { useEffect, useState } from "react";
import { Card, Menu, Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useStore, GET_TODOLIST, TOGGLE_COMPLETE, GET_TODO } from "../store/store";
import { deleteTodo, toggleComplete, getMyTodos, getTodo } from "../fetch/fetch";
import ActionButton from "antd/lib/modal/ActionButton";

function TodoItem(props) {
  // const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  // const store = useStore();
  const [todo, setTodo] = useState({});

  const toggleCompleted = async () => {
    await toggleComplete(user.token, props._id);
    const newTodo = await getTodo(user.token, props._id);
    setTodo(newTodo);
    console.log(todo);
    props.updateMatter(Math.random());
  };

  useEffect(() => {
    const someBullShit = async () => {
      const newTodo = await getTodo(user.token, props._id);
      setTodo(newTodo);
    };
    someBullShit();
  }, []);

  return (
    <div className="todoItem">
      <li>
        <Card title={<h3>{todo.title}</h3>} style={{ width: 300 }}>
          <p>details: {todo.details}</p>
          <p>createdAt: {todo.createdAt}</p>
          <p>dueDate: {todo.dueDate}</p>
          <p>completed: {todo.completed === true ? "completed" : "Not Completed"}</p>

          <Button type="primary" shape="circle" onClick={toggleCompleted}>
            Toggle Complete
          </Button>

          <Button type="primary" shape="circle">
            Delete
          </Button>
        </Card>
      </li>
    </div>
  );
}

export default TodoItem;
