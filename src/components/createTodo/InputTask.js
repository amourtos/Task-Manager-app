import React, { useState } from "react";
import { useStore } from "../../store/store";
import { Form, Button } from "react-bootstrap";
import { postMyTodos } from "../../fetch/fetch";

function InputTask(props) {
  const user = useStore((state) => state.user);
  const [taskData, setTaskData] = useState({
    title: "",
    details: "",
    dueDate: "",
    category: "",
  });

  const handleSubmit = (e) => {
    postMyTodos(user.token, taskData.title, taskData.details, taskData.dueDate, taskData.category, user.id);
    props.updateMatter(Math.random());
    props.something();
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setTaskData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div class="container h-100">
      <h1>Create your To Do that You Can Do</h1>

      <Form
        onSubmit={handleSubmit}
        style={{ width: "69rem" }}
        class="container"
        class="h-100 w-100 justify-content-center align-items-center">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title: </Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="do your laundry"
            onChange={handleChange}
            value={taskData.title}
            required
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Details of Todo: </Form.Label>
          <Form.Control name="details" as="textarea" rows={3} onChange={handleChange} value={taskData.details} required />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Must Be Completed By: </Form.Label>
          <Form.Control
            name="dueDate"
            type="date"
            placeholder="enter due date"
            onChange={handleChange}
            value={taskData.dueDate}
            class="w-50"
            required
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control class="w-50" name="category" as="select" value={taskData.category} onChange={handleChange}>
            <option>Please Select A Category</option>
            <option>Fitness</option>
            <option>School</option>
            <option>Work</option>
            <option>Chores</option>
            <option>Misc</option>
          </Form.Control>
        </Form.Group>

        <Button variant="success" onClick={handleSubmit}>
          Submit Todo
        </Button>
      </Form>
    </div>
  );
}

export default InputTask;
