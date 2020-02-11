import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Navbar() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <div className="left">
          <Link to="/" className="brand-logo">
            Quest Log
          </Link>
        </div>
        <div className="right">
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
