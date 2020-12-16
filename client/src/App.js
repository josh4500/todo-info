import React from "react";
import Authentication from "./Authentication";
import { UserProfile, NotePage } from "./components";
import { AuthContext, ThemeContext, NoteContext } from "./context";
import "./css/app.css";

const App = () => {
  return (
    <AuthContext.Consumer>
      {({ user }) => (
        <ThemeContext.Consumer>
          {(theme) => (
            <NoteContext.Consumer>
              {(note) => {
                return user.active ? (
                  <div id="app">
                    <UserProfile user={user} />
                    <NotePage />
                  </div>
                ) : (
                  <div id="app">
                    <Authentication />
                  </div>
                );
              }}
            </NoteContext.Consumer>
          )}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
};

export default App;
