import React, { Component } from "react";
import {useParams} from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/firestore';

import GameDetails from "../Cards/GameDetails";
import CharList from "../Cards/CharList";
import CreepList from "../Cards/CreepList";

// const heroes = [
//   {
//     name: "Deothas",
//     race: "Human",
//     class: "Paladin",
//     hp: "35",
//     ac: "13",
//     level: "5"
//   },
//   {
//     name: "Cylril",
//     race: "Half-elf",
//     class: "Warlock",
//     hp: "23",
//     ac: "12",
//     level: "4"
//   },
//   {
//     name: "Dendril",
//     race: "Orc",
//     class: "Barbarian",
//     hp: "50",
//     ac: "12",
//     level: "5"
//   }
// ];
// const creeps = [
//   {
//     name: "Saruman",
//     race: "Human",
//     class: "Sorcerer",
//     hp: "60",
//     ac: "16",
//     level: "12"
//   },
//   {
//     name: "Shagrath",
//     race: "Orc",
//     class: "Warrior",
//     hp: "30",
//     ac: "9",
//     level: "6"
//   },
//   {
//     name: "Gothmog",
//     race: "Orc",
//     class: "Barbarian",
//     hp: "48",
//     ac: "14",
//     level: "9"
//   }
// ];

class Game extends Component {
  constructor(){
    super()
    this.state = {
      gameData:{},
      heroes: [],
      creeps: [],
      gameLog: [],
      gameId: useParams()
    }
    // this.handleAddCharacter = this.handleAddCharacter.bind(this)
    // this.handleDelCharacter = this.handleDelCharacter.bind(this)
  }

  // get data from firebase and update the state
  componentDidMount() {
    const db = firebase.firestore().collection('games').doc(this.state.gameId).collection('heroes');

  }



  render() {

  // update a variable with some jsx to render to the dom when the component updates
  
  

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
