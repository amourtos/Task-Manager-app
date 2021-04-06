import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { REGISTER } from "../store/store";
import { useStore } from "../store/store";

function Registration(props) {
  const dispatch = useStore((state) => state.dispatch);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  // const handleRegister = (e) => {
  //  e.preventDefault();
  //  registerRequest(userData).then((userData) =>
  //    dispatch({ type: REGISTER, payload: userData })
  //  );
  //  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUserData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div className="RegisterForm">
      <Form className="RegisterForm">
        <Form.Item
          label="Username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input name={"username"} onChange={(event) => handleChange(event)} />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input name={"email"} />
        </Form.Item>
        <Form.Item
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name={"password"}
            onChange={(event) => handleChange(event)}
          />
        </Form.Item>
        <Form.Item>
          <Button id="SubmitButton" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Button />
    </div>
  );
}

export default Registration;
