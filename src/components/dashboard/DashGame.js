import React, { Component } from "react";
import GameDetails from "./GameDetails";
import CharList from "./CharList";
import NPCList from "./NPCList";

class DashGame extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <CharList />
          <GameDetails />
          <NPCList />
        </div>
      </div>
    );
  }
}

export default DashGame;
