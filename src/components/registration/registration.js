import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { createUser } from "../../fetch/fetch";
import Popup from "./popup.js";

function Registration(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(userData.username, userData.email, userData.password)
      .then(() => setButtonPopup(true))
      .catch(() => {
        alert("Username or email may already be taken. Try again.");
        <Popup>
          <h3>Please try again</h3>
        </Popup>;
      });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUserData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
            value={userData.username}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter Email" onChange={handleChange} value={userData.email} required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={userData.password}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </div>
  );
}

export default Registration;
