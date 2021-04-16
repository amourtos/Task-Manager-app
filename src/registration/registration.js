import React, { useState, useStore } from "react";
import { Form, Input, Button } from "antd";

import { createUser } from "../fetch/fetch";
import Popup from "./Popup";

function Registration(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
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
    <div className="RegisterForm">
      <Form
        className="RegisterForm"
        onSubmit={(e) => e.preventDefault()}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            name={"username"}
            value={userData.username}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input
            name={"email"}
            value={userData.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name={"password"}
            value={userData.password}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button id="SubmitButton" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
    </div>
  );
}

export default Registration;
