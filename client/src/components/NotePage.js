import React from "react";
import Note from "./Note";
import "../css/notePage.css";

const NotePage = () => (
  <div id="notePage">
    <div id="head">
      <div>Note</div>
    </div>
    <div id="body">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  </div>
);

export default NotePage;
