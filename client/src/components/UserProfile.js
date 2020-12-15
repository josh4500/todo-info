import React, { useContext } from "react";
import AuthContext from "../context";
import { Authentication } from ".././Authentication";
import "../css/profileNav.css";

const UserProfile = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <>
      {!user.active ? (
        <Authentication />
      ) : (
        <div id="profileDetails">
          <div id="userDetails">
            {/* <Image /> */}
            <div id="username">AJOSH4500</div>
          </div>
          <div id="userTodoInfo">
            <div id="n0_note" className="todoDetails">
              <p>You have the total of 12 {} notes</p>
            </div>
            <div id="n0_todo" className="todoDetails">
              <p> Total of 5 {} todo</p>
            </div>
            <div id="toComplete" className="todoDetails">
              <p>Remaining 3 more task to accomplish</p>
            </div>
            <div id="addNoteBtn">ADD NOTE</div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
