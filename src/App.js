import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AuthProvider} from './components/auth/Auth';

import DashHome from "./components/dashboard/DashHome";
import DashCreate from "./components/dashboard/DashCreate";
import DashGame from "./components/game/DashGame";
import DashLanding from './components/dashboard/DashLanding';
import Navbar from "./components/navbar/Navbar";
import SignIn2 from "./components/auth/SignIn2";
import SignUp2 from "./components/auth/SignUp2";
import PrivateRoute from './PrivateRoute'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      uID: '',
      isLoggedIn: false,
    }
  }

  render() {
    const userProps = {
      user: this.state.user,
      uID: this.state.uID,
      isLoggedIn: this.state.isLoggedIn,
    }

    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar user={userProps} />
            <Switch>
              <Route exact path="/" user={userProps} component={DashLanding} />
              <PrivateRoute path="/home" user={userProps} component={DashHome} />
              <Route path="/new-game" component={DashCreate} />
              <PrivateRoute path="/game/:id" component={DashGame} />
              <Route path="/signin" component={SignIn2} />
              <Route path="/signup" component={SignUp2} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
      
    );
  }
}


export default App;
