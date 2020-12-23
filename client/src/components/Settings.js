import React from "react";
import Input from "./Input/Input";

const Settings = ({ user, toggle, logout }) => {
  const display = toggle ? "flex" : "none";
  const height = toggle ? "60%" : "50%";
  const width = toggle ? "50%" : "40%";
  return (
    <div id="settings" style={{ display, height, width }}>
      <div id="editUser">
        <form method="POST">
          <Input
            type="text"
            name="Username"
            style={{
              borderRadius: "5px",
              padding: "5px 10px",
              color: "#666666",
            }}
            placeholder="username"
          />
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
