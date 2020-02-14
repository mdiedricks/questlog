import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div className="right">
      <ul>
        <li>
          <NavLink to="/signin">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
