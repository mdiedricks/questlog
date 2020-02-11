import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <div className="right">
      <ul>
        <li>
          <NavLink to="/create-game">Create game</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            MD
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
