import React, { useState } from "react";
import { Input } from "../components";
import "../css/auth.css";

const Auth = () => {
  const [page, setPage] = useState("Login");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    keepSignedIn: "",
  });
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const onChange = (e) => {
    if (page === "Login") {
      setLoginData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      setNewUser((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //TODO
    if (page === "Login") {
      console.log(loginData);
    } else {
      console.log(newUser);
    }
  };
  return (
    <div id="auth-container">
      <h2
        style={{
          color: "#252525",
          textAlign: "center",
          fontFamily: "cursive",
        }}
      >
        {page === "Login" ? "Login" : "Create an account"}
      </h2>
      <form method="POST" className="auth-form" onSubmit={onSubmit} noValidate>
        {page === "Login" ? (
          <>
            <Input
              className="auth-box"
              name="email"
              value={loginData.email}
              type="email"
              placeholder="Email address"
              onChange={onChange}
            />
            <Input
              className="auth-box"
              name="password"
              value={loginData.password}
              type="password"
              placeholder="Password"
              onChange={onChange}
            />
            <div>
              <Input
                name="keepLoggin"
                type="checkbox"
                value={loginData.keepSignedIn}
              />
              <label className="keepLoggin" htmlFor="keepLoggin">
                Keep me logged in?
              </label>
            </div>
          </>
        ) : (
          <>
            <Input
              className="auth-box"
              name="username"
              value={newUser.username}
              type="text"
              placeholder="Username"
              onChange={onChange}
            />
            <Input
              className="auth-box"
              name="email"
              value={newUser.email}
              type="email"
              placeholder="Email address"
              onChange={onChange}
            />
            <Input
              className="auth-box"
              name="password"
              value={newUser.password}
              type="password"
              placeholder="Password"
              onChange={onChange}
            />
            <Input
              className="auth-box"
              name="cPassword"
              value={newUser.cPassword}
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
          onClick={() => {
            if (page === "Signup") {
              setLoginData({
                email: newUser.email,
                password: newUser.password,
              });
              setPage("Login");
            } else {
              setNewUser((prevState) => ({
                ...prevState,
                cPassword: loginData.password,
                ...loginData,
              }));
              setPage("Signup");
            }
          }}
        >
          {page === "Signup" ? "Log in" : "Sign up"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
