import React, { useContext } from "react";
import { UserProfile } from "./components";
import AuthContext, { ThemeProvider, NoteProvider } from "./context";
import "./css/app.css";

const App = () => {
  const { user, login, logout } = useContext(AuthContext);
  return (
    <div id="app">
      <UserProfile />
    </div>
  );
};

export default App;
