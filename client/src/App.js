import React, { useState } from "react";
import Authentication from "./Authentication";
import { UserProfile, NotePage } from "./components";
import { ThemeContext } from "./context";
import "./css/app.css";

const App = () => {
  const [user, setUser] = useState({ active: true, data: {} });
  const [notes, setNotes] = useState([]);
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
};

export default App;
