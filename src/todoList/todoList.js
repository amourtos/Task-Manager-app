import React, { useEffect, useState } from "react";
import { getMyTodos } from "../fetch/fetch";
import { useStore } from "../store/store";
import TodoItem from "../todoItem/todoItem";
import InputTask from "../createTodo/InputTask";
import { Button, ButtonGroup } from "react-bootstrap";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "../todoList/todoList.css";

function TodoList(props) {
  const user = useStore((state) => state.user);
  const [dontMatter, setDontMatter] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [calDate, setCalDate] = useState(new Date());

  const onChange = (calDate) => {
    setCalDate(calDate);
    console.log(moment(calDate).format("MMM Do, YYYY"));
    getMyTodos(user.token).then((data) => {
      let result = data.filter((ele) => moment(ele.dueDate).format("MMM, Do, YYYY") === moment(calDate).format("MMM, Do, YYYY"));
      setTodoList(result);
    });
  };

  //FILTER FUNCTIONS BY CATEGORY --------------------------------------------
  const filterWork = () => {
    getMyTodos(user.token).then((data) => {
      let result = data.filter((ele) => ele.category === "Work");
      setTodoList(result);
    });
  };
  const filterChores = () => {
    getMyTodos(user.token).then((data) => {
      let result = data.filter((ele) => ele.category === "Chores");
      setTodoList(result);
    });
  };
  const filterFitness = () => {
    getMyTodos(user.token).then((data) => {
      let result = data.filter((ele) => ele.category === "Fitness");
      setTodoList(result);
    });
  };
  const filterMisc = () => {
    getMyTodos(user.token).then((data) => {
      let result = data.filter((ele) => ele.category === "Misc");
      setTodoList(result);
    });
  };
  const filterSchool = () => {
    getMyTodos(user.token).then((data) => {
      let result = data.filter((ele) => ele.category === "School");
      setTodoList(result);
    });
  };
  const filterCompleted = () => {
    getMyTodos(user.token).then((data) => {
      let result = data.filter((ele) => ele.completed === true);
      setTodoList(result);
    });
  };
  const filterNotCompleted = () => {
    getMyTodos(user.token).then((data) => {
      let result = data.filter((ele) => ele.completed === false);
      setTodoList(result);
    });
  };
  const something = async () => {
    const todos = await getMyTodos(user.token);
    setTodoList(todos);
    console.log(todos);
  };
  //END FILTER FUNCTION BY CATEGORY -------------------------------------------
  useEffect(() => {
    something();
  }, [dontMatter]);

  return (
    <div>
      <section className="main">
        {user.token ? <InputTask something={something} updateMatter={setDontMatter} /> : null}
        <br></br>
        <br></br>
        <h3>Todo List</h3>
        <br></br>
        {user.token ? <Calendar class="calendar" onChange={onChange} value={calDate} /> : null}
        <br></br>
        <ButtonGroup size="lg" className="mb-2">
          <Button variant="info" onClick={filterFitness}>
            Fitness
          </Button>
          <Button variant="info" onClick={filterSchool}>
            School
          </Button>
          <Button variant="info" onClick={filterWork}>
            Work
          </Button>
          <Button variant="info" onClick={filterChores}>
            Chores
          </Button>
          <Button variant="info" onClick={filterMisc}>
            Misc
          </Button>
          <Button variant="info" onClick={something}>
            All
          </Button>
          <Button variant="info" onClick={filterCompleted}>
            Completed
          </Button>
          <Button variant="info" onClick={filterNotCompleted}>
            Not Completed
          </Button>
        </ButtonGroup>
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
    </div>
  );
}

export default TodoList;
