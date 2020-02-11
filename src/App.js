import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import firebase from "./firebase";

import DashHome from "./components/dashboard/DashHome";
import DashCreate from "./components/dashboard/DashCreate";
import DashGame from "./components/dashboard/DashGame";
import Navbar from "./components/layout/Navbar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={DashHome} />
          <Route path="/create-game" component={DashCreate} />
          <Route path="/game/:id" component={DashGame} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
