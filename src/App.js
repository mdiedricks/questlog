import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./components/Pages/Home";
import Create from "./components/Pages/Create";
import Game from "./components/Pages/Game";
import Navbar from "./components/Pages/Navbar";

const App = () => {

    return (
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/create" >
                <Create/>
              </Route>
              <Route path="/game/:id" >
                <Game/>
              </Route>
            </Switch>
          </div>
        </Router>      
    );
  }

export default App;
