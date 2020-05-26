import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

import GameCard from '../Cards/GameCard';

import scroll from '../../assets/scroll.svg';
// import sword from '../../assets/sword.svg';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

const db = firebase.firestore().collection('games');
let gameList = [];


const Home = () => {
  const [games, setGames] = useState([]);
  
  const getGames = () => {
    db.get()
      .then((snapshot) => {
        snapshot.docs.forEach(doc => {
        gameList.push(doc);
        })
      setGames(gameList)
      })
  }
  const handleGameDel = (id) =>{
    db.doc(id).delete()
    .then(()=>{
      console.log('Game deleted')
    })
    .then(()=>{
    let curGames = games;
    let thisGameId = id;
    let newGames = curGames.filter(game => {
      return game.id !== thisGameId;
    })
    setGames(newGames); 
    })
  }

  useEffect(() => getGames(), [])

  const gameCards = games.map(game => (
      <GameCard key={game.id}
        game={game}
        deleteGame={()=>handleGameDel(game.id)}/>
    )
  )
  
    return (
      <div className="container">
        <div className="jumbotron">
          <img src={scroll} alt="All for one, and one for all!"/>
          <section className="cta">
            <span className="t1 jumbo-title">Welcome to Questlog</span>
            <span className="t2 jumbo-sub">Track your players easily and accurately without complictaed UIs, unnecessary accessories and buttons you're not even sure work.</span>
            <span className="t3">Select from a game below or create a new one.</span>
          </section>
        </div>
        
        <div className="hor-bar"></div>
        
        <div className="game-list">
          <ul>
            {gameCards}
          </ul>
        </div>
      </div>
    );
}

export default Home;
