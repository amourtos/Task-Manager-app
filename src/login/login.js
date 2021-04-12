import React, { useState, useEffect } from "react";
import { loginRequest } from "../fetch/fetch";
import { useStore, LOGIN } from "../store/store";

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

  const handleMessage = (e) => {
    console.log(e);
  };

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div className="LoginForm">
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Email-</label>
        <input type="text" name="email" value={formData.email} autoFocus required onChange={handleChange} />
        <label htmlFor="password">Password-</label>
        <input type="password" name="password" value={formData.password} required onChange={handleChange} />
        <button id="LoginButton" type="submit">
          Login
        </button>
        <div>{user.message ? user.message : ""}</div>
      </form>
    </div>
  );
}

export default Login;
