import React,{ useState, useEffect } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';


const db = firebase.firestore().collection('games');
let gameLog = [];
// const gameData = {
//   title: "Princes of the Apocalypse",
//   location: "Faerun",
//   storyHook:
//     "The heroes have found themselves in a bar fight at the local inn, when a stranger pulls them aside to tell them this bar-fight is all an illusion."
// };


export default function GameDetails(props) {
  const [gameLog, setGameLog] = useState([]);
  const [gameData, setgameData] = useState({});
  const [gameId, setGameId] = useState(props.gameId);

  useEffect(()=>{
    //get game data from DB


    //update state

  })




  return (
    <section className="card game-detail">
      <h3 className="t2">{gameData.title}</h3>
      <h6>{props.gameId}</h6>
      <div className="game-text">
        <span className="t3">Setting: </span>
        <span>{gameData.location}</span>
      </div>
      <div className="game-text">
        <span className="t3">Story Hook: </span>
        <span>{gameData.storyHook}</span>
      </div>
      
    </section>
  );
}
