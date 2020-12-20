import React from "react";
import "../css/profileNav.css";

const UserProfile = ({ user }) => {
  // const { user, login, logout } = auth;
  return (
    <div id="profileDetails">
      <div id="userDetails">
        <div></div>
        <div id="username">AJOSH4500</div>
      </div>
      <div id="userTodoInfo">
        <div id="n0_note" className="todoDetails">
          <p>You have the total of 12 {} notes</p>
        </div>
        <div id="n0_todo" className="todoDetails">
          <p>Total of 5 {} todo</p>
        </div>
        <div id="toComplete" className="todoDetails">
          <p>Remaining 3 more task to accomplish</p>
        </div>
        <button id="addNoteBtn">ADD NOTE</button>
        <div>Settings</div>
      </div>
    </div>
  );
};

export default UserProfile;
