import React from "react";

const NoteContext = React.createContext();

export const NoteProvider = ({ children }) => {
  return <NoteContext.Provider value={{}}>{children}</NoteContext.Provider>;
};

export default NoteContext;
