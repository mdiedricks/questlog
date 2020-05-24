import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav>
      <section className="container nav-bar">
          <span>
            <Link to="/" className="logo">Quest Log</Link>
          </span>
          <span>
            <Link to="/create" className="nav-links">Create</Link>
          </span>
      </section>
    </nav>
  );
}

export default Navbar;
