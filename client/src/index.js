import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { AuthProvider, ThemeProvider, NoteProvider } from "./context";

ReactDOM.render(
  <AuthProvider>
    <ThemeProvider>
      <NoteProvider>
        <App />
      </NoteProvider>
    </ThemeProvider>
  </AuthProvider>,
  document.getElementById("root")
);
