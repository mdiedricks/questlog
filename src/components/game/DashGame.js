import React, { Component } from "react";
import GameDetails from "./GameDetails";
import CharList from "./CharList";
import CreepList from "./CreepList";

class DashGame extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <CharList />
          <GameDetails />
          <CreepList />
        </div>
      </div>
    );
  }
}

export default DashGame;
