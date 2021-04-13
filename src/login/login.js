import React, { useState, useStore } from "react";
import { LOGIN } from "../store/store";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const user = useStore((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();

    // loginRequest(formData.username, formData.password).then((userData) => {
    //   dispatch({ type: LOGIN, payload: userData });
    //   window.localStorage.setItem("user", JSON.stringify(userData));
    //  });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div className="LoginForm">
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username-</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password-</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <button id="LoginButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
