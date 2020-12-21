import React, { useState } from "react";
import Authentication from "./Authentication";
import { UserProfile, NotePage } from "./components";
import { AuthContext, ThemeContext, NoteContext } from "./context";
import "./css/app.css";

const App = () => {
  const [user, setUser] = useState({ active: true, data: {} });
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return user.active ? (
          <div id="app">
            <UserProfile user={user} notes={notes} theme={theme} />
            <NotePage notes={notes} theme={theme} />
          </div>
        ) : (
          <div id="authenticate">
            <Authentication user={user} />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default App;
