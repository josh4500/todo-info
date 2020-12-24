import React from "react";
import Input from "./Input/Input";

const Settings = ({ user, toggle, logout }) => {
  const display = toggle ? "block" : "none";
  const height = toggle ? "60%" : "50%";
  const width = toggle ? "50%" : "40%";
  return (
    <div id="settings" style={{ display, height, width }}>
      <div id="editUser">
        <form method="POST">
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email Address" />
          <input type="password" name="password" placeholder="Password" />
          <button id="update-btn" className="settings-btn">
            UPDATE
          </button>
        </form>
      </div>
      <div>
        <button
          id="logout-btn"
          className="settings-btn"
          onClick={() => logout(user.data.userid)}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
};
export default Settings;
