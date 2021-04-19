import React, { useEffect, useState } from "react";
import { useStore } from "../store/store";
import { deleteTodo, toggleComplete, getMyTodos, getTodo } from "../fetch/fetch";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

function TodoItem(props) {
  const user = useStore((state) => state.user);
  const [todo, setTodo] = useState({});

  const toggleCompleted = async () => {
    await toggleComplete(user.token, props._id);
    const newTodo = await getTodo(user.token, props._id);
    setTodo(newTodo);
    console.log(todo);
    props.something();
    // props.updateMatter(Math.random());
  };

  const deleteTodoFunction = async () => {
    await deleteTodo(user.token, props._id);
    const newTodo = await getTodo(user.token, props._id);
    setTodo(newTodo);
    props.something();
    // await getMyTodos(user.token).then((data) => console.log(data));
    // props.updateMatter(Math.random());
  };

  useEffect(() => {
    const someStuff = async () => {
      const updatedTodo = await getTodo(user.token, props._id).catch((err) => console.log(err));
      setTodo(updatedTodo);
    };
    someStuff();
  }, [user]);

  return (
    <div className="todoItem">
      {todo === null ? (
        <div></div>
      ) : (
        <Card bg="dark" border="success" style={{ width: "27rem" }}>
          <Card.Header border="success">
            {" "}
            <Card.Title>Category: {todo.category}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Due By: {todo.dueDate}</Card.Subtitle>

            <Card.Text>{todo.details}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">{todo.completed === true ? "completed" : ""}</Card.Subtitle>
            {todo.completed === true ? (
              <Button variant="Dark" onClick={toggleCompleted}>
                OOPS! This isn't finished.
              </Button>
            ) : (
              <Button variant="success" onClick={toggleCompleted}>
                Click to Complete
              </Button>
            )}

            <Button variant="danger" onClick={deleteTodoFunction}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default TodoItem;

{
  /* <Card title={<h3>{todo.title}</h3>} style={{ width: 300 }}>
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
</Card> */
}
