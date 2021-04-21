import React, { useState } from "react";
import { loginRequest } from "../../fetch/fetch";
import { useStore, LOGIN } from "../../store/store";
import { Form, Button } from "react-bootstrap";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const user = useStore((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.email, formData.password).then((userData) => {
      dispatch({ type: LOGIN, payload: userData });
      window.localStorage.setItem("user", JSON.stringify(userData));
    });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="text" placeholder="email" value={formData.email} required onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="info" type="submit">
          LOGIN
        </Button>
        <br></br>
        <div>{user.message ? user.message : ""}</div>
      </Form>
    </>
  );
}

export default Login;
