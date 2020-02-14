import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from '../auth/Auth';
import firebase from 'firebase';

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Navbar() {
  // new stuff
  const [user, setUser] = useState('');

  useEffect(()=> {
    compLoaded() 
  }, []) 
  
  const compLoaded = async() => {
  const currUser = await firebase.auth().currentUser;
  console.log(currUser);
  setUser({...user, user: currUser})
}

  // new stuff

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <div className="left">
          <Link to="/" className="brand-logo">
            Quest Log
          </Link>
        </div>
        <div className="right">
          {/* {(user != null) ? (  */}
          <SignedOutLinks />
          {/* ) : ( */}
          <SignedInLinks />
          {/* )
          } */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
