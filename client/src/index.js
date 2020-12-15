import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { AuthProvider } from "./context";
const element = (
  <AuthProvider>
    <App />
  </AuthProvider>
);
ReactDOM.render(element, document.getElementById("root"));
