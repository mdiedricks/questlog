import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

import GameDetails from "../Cards/GameDetails";
import CharList from "../Cards/CharList";
import CreepList from "../Cards/CreepList";
import NewChar from '../Cards/NewChar.js'


export default function Game()  {
  const [gameData, setGameData] = useState([]);
  const queryParam = useParams();
  const GameId = queryParam.id;
  let [modalVisibility, changeModalVisibility] = useState(false);


  const db = firebase.firestore().collection('games').doc(GameId);

  function getGameData() {
    // console.log(`Querying db...`)    
    db.get()
    .then(snapshot => {
      // console.log(snapshot.data());
      return snapshot.data();
    },)
    .then(snapshot => {
      setGameData(snapshot);
    })
  }

  useEffect(() => {
    getGameData()
  }, [])

  const modalControls = {
    showModal: (e) =>{
      changeModalVisibility(true);
    },
    hideModal: (e) =>{
      changeModalVisibility(false);
    }
  }

  if (modalVisibility === true){
    return <NewChar controls={modalControls}/>
  }

    return (
      <section className="container game-content">
          <CharList controls={modalControls}/>          
          <div className="fragment"></div>
          <GameDetails gameData={gameData}/>
          <div className="fragment"></div>
          <CreepList />
      </section>
    );
  
}

