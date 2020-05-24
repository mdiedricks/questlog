import React,{ useState } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore().collection('games');


const GameDetails = (props) => {

  

  return (
    <section className="card game-detail">
      <h3 className="t2">{props.gameData.title}</h3>
      <div className="game-text">
        <span className="t3">Settingzzz: </span>
        <span>{props.gameData.location}</span>
      </div>
      <div className="game-text">
        <span className="t3">Story Hook: </span>
        <span>{props.gameData.storyHook}</span>
      </div>
      
    </section>
  );
}

export default GameDetails;
