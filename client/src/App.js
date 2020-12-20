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
              {(notes) => {
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
            </NoteContext.Consumer>
          )}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
};

export default App;
