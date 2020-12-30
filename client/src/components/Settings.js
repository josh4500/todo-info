import React, { useState } from "react";

const Settings = ({ user, toggle, logout, control }) => {
  const opacity = toggle ? 1 : 0;
  const transform = toggle ? "scale(1)" : "scale(0.5)";
  const zIndex = toggle ? 99 : -99;

  const [newData, setNewData] = useState({ ...user.data, password: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    control.updateProfile({ ...user.data, ...newData });
  };
  const onChange = (e) => {
    setNewData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div id="settings" style={{ opacity, transform, zIndex }}>
      <h1>Account settings</h1>
      <h4>Update account settings</h4>
      <div id="editUser">
        <form method="POST" onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={newData.username}
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={newData.email}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
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
