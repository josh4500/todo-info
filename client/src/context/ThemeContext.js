import React from "react";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={{}}></ThemeContext.Provider>;
};

export default ThemeContext;
