import React, { useState } from "react";
import { Input } from "../components";
import "../css/auth.css";

const Auth = () => {
  const [page, setPage] = useState("Login");
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
    <div id="auth-container">
      <form className="auth-form" onSubmit={onSubmit}>
        {page === "Login" ? (
          <>
            <Input
              className="auth-input"
              name="email"
              type="email"
              placeholder="Email address"
            />
            <Input
              className="auth-input"
              name="password"
              type="password"
              placeholder="Password"
            />
            <div>
              <Input name="keepLoggin" type="checkbox" />
              <label className="keepLoggin" htmlFor="keepLoggin">
                Keep me logged in?
              </label>
            </div>
          </>
        ) : (
          <>
            <Input
              className="auth-input"
              name="username"
              type="text"
              placeholder="Username"
              onChange={onChange}
            />
            <Input
              className="auth-input"
              name="email"
              type="email"
              placeholder="Email address"
              onChange={onChange}
            />
            <Input
              className="auth-input"
              name="password"
              type="password"
              placeholder="Password"
              onChange={onChange}
            />
            <Input
              className="auth-input"
              name="cPassword"
              type="password"
              placeholder="Confirm password"
              onChange={onChange}
            />
          </>
        )}
        <button id="submit-btn" type="submit">
          {page}
        </button>
      </form>
      <div className="change-page">
        {page === "Signup" ? "Do you have an account?" : "Create an account?"}
        <button
          className="change-page change-page-btn"
          onClick={() =>
            page === "Signup" ? setPage("Login") : setPage("Signup")
          }
        >
          {page === "Signup" ? "Log in" : "Sign up"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
