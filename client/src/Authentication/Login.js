import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <label for="email">Email</label>
        <input className="authInuput" name="email" type="email" />
        <label for="password">Password</label>
        <input className="authInuput" name="password" type="password" />
        <input name="Login" type="submit" />
      </form>
    </div>
  );
};

export default Login;
