import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import {AuthContext} from './components/auth/Auth';
import {AuthProvider} from './components/auth/Auth';

import DashHome from "./components/dashboard/DashHome";
import DashCreate from "./components/dashboard/DashCreate";
import DashGame from "./components/game/DashGame";
import DashLanding from './components/dashboard/DashLanding';
import Navbar from "./components/navbar/Navbar";
import SignIn2 from "./components/auth/SignIn2";
import SignUp2 from "./components/auth/SignUp2";
import PrivateRoute from './PrivateRoute'

const App = () => {
  // const [UID, setUID] = useState('');
  // const { userID } = useContext(AuthContext);

  // let bUID = UID

  // useEffect(()=> {
  //   compLoaded() 
  // }, [])

  // const compLoaded = async() => {
  //   // CHECK IF USER IS CURRENTLY LOGGED IN
  //   if (userID != null) {
  //     setUID(userID);
  //     bUID = userID;      
  //   } else {
  //     console.log('User not available');
  //   }
  // }

    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={DashLanding}>
                {/* {this.props.value.userID ? <Redirect to="/home" /> : <DashLanding />} */}
              </Route>
              <PrivateRoute path="/home"  component={DashHome} />
              <PrivateRoute path="/new-game" component={DashCreate} />
              <PrivateRoute path="/game/:id" component={DashGame} />
              <Route path="/signin" component={SignIn2} />
              <Route path="/signup" component={SignUp2} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
      
    );
  }


export default App;
