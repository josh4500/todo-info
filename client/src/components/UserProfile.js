import React from "react";
import "../css/profileNav.css";
import userImg from "../icons/user.png";
import settsIcon from "../icons/settings.png";

const UserProfile = ({ user, notes, toggleSettings, toggleNoteEdit }) => {
  return (
    <div id="profileDetails" style={{ fontFamily: "Nunito-Regular" }}>
      <div id="userDetails">
        <img
          id="profilePic"
          src={userImg}
          alt="Default profilePic"
          width="150px"
          height="150px"
        />
        <div id="username" style={{ textAlign: "center" }}>
          {user.data.username.toUpperCase()}
        </div>
      </div>
      <div id="userTodoInfo">
        <div id="n0_note" className="todoDetails">
          <p>You have the total of {notes.length || 0} notes</p>
        </div>
        <div id="n0_todo" className="todoDetails">
          <p>
            Total of{" "}
            {notes
              .filter((note) => note.isTodo === true)
              .map((note) => note.todoList.length)
              .reduce((total, todoLength) => total + todoLength, 0)}{" "}
            todo
          </p>
        </div>
        <div id="toComplete" className="todoDetails">
          <p>
            Remaining{" "}
            {notes
              .filter((note) => note.isTodo === true)
              .map((note) =>
                note.todoList.filter((todo) => todo.checked === false)
              )
              .map((len) => len.length)
              .reduce((total, todoLength) => total + todoLength, 0)}{" "}
            more tasks to accomplish
          </p>
        </div>
        <label htmlFor="toggleProfile">
          <button id="addNoteBtn" onClick={toggleNoteEdit}>
            ADD NOTE
          </button>
        </label>
      </div>
      <div id="stts" onClick={() => toggleSettings()}>
        <img src={settsIcon} alt="" />
        <div id="stts-btn">Settings</div>
      </div>
    </div>
  );
};

export default UserProfile;
