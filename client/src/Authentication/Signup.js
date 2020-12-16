import React, { useState } from "react";
import "../css/auth.css";

const Signup = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const onChange = (e) => {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(newUser);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="authContainer">
      <form id="signup" className="authForm" onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          className="authInput"
          name="username"
          type="text"
          onChange={onChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          className="authInput"
          name="email"
          type="email"
          onChange={onChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="authInput"
          name="password"
          type="password"
          onChange={onChange}
        />
        <label htmlFor="cPassword">Confirm Password</label>
        <input
          className="authInput"
          name="cPassword"
          type="password"
          onChange={onChange}
        />
        <input id="submitBtn" name="Signup" type="submit" />
      </form>
    </div>
  );
};

export default Signup;
