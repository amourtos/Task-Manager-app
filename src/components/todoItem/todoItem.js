import React, { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { deleteTodo, toggleComplete, getTodo } from "../../fetch/fetch";
import { Card, Button } from "react-bootstrap";
import moment from "moment";
import countdown from "moment-countdown";

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

  const countDown = (date) => {
    let days = moment().countdown(date, countdown.DAYS, 1).toString();
    if (days[3] === "h" || days[2] === "h") {
      days = "Today";
    }
    let countstart = moment().countdown(date, countdown.DAYS, 1).start;
    let countend = moment().countdown(date, countdown.DAYS, 1).end;

    let countstartFormat = moment(countstart).format("MMDD");
    let countendFormat = moment(countend).format("MMDD");

    if (Math.sign(countstartFormat - countendFormat) === 1) {
      days = "Past Due";
    }
    return days;
  };

  useEffect(() => {
    const someStuff = async () => {
      const updatedTodo = await getTodo(user.token, props._id).catch((err) => console.log(err));
      setTodo(updatedTodo);
    };
    someStuff();
  }, [user]);

  return (
    <div class="container h-100">
      {todo === null ? (
        <div></div>
      ) : (
        <div class="row h-100 justify-content-center align-items-center">
          <Card bg="dark" border="success" style={{ width: "45rem" }}>
            <Card.Header border="success">
              {" "}
              <Card.Title>Category: {todo.category}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Title>{todo.title}</Card.Title>

              <Card.Subtitle
                className="mb-2 text"
                style={
                  countDown(todo.dueDate) === "Today" || countDown(todo.dueDate) === "Past Due"
                    ? { color: "red" }
                    : { color: "lightgreen" }
                }>
                Due: {countDown(todo.dueDate)}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Due by: {moment(todo.dueDate).format("MMM Do, YY")}</Card.Subtitle>
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
        </div>
      )}
    </div>
  );
}

export default TodoItem;
