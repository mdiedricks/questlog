import React from "react";
import { NavLink } from "react-router-dom";
import fbApp from '../config/fbConfig';

const SignedInLinks = (props) => {

  return (
    <div className="right">
      <ul>
        <li>
          <NavLink to="/new-game">New game</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={() => fbApp.auth().signOut()}>Log Out</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
