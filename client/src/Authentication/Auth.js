import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const Auth = () => {
  const [user, setUser] = useState({ active: false, data: {} });
  return <>{user.active ? <Login /> : <Signup />}</>;
};

export default Auth;
