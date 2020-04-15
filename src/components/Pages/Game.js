import React, { Component } from "react";
import GameDetails from "../Cards/GameDetails";
import CharList from "../Cards/CharList";
import CreepList from "../Cards/CreepList";

class Game extends Component {
  
  
  
  render() {


    return (
      <section className="container game-content">
          <CharList />          
          <div className="fragment"></div>
          <GameDetails />
          <div className="fragment"></div>
          <CreepList />
      </section>
    );
  }
}

export default Game;
