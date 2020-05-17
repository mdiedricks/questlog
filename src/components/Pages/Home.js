import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

import scroll from '../../assets/scroll.svg';
import sword from '../../assets/sword.svg';

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

  useEffect(() => getGames(), [])

  const gameCards = games.map((e, index) => (
      <li key={index}>
        <div className="card">
            <div className="card-image">
              <img src={sword} alt="Enter battle!"/>
            </div>
            <div className="card-content">
              <Link to={`/game/${e.id}`} >
                <span className="t2 card-title">{e.data().title}</span>
              </Link><br></br><br></br>
              <span className="t3 card-text">Location: {e.data().location}</span><br></br>
              <span className="t3 card-text">Story Hook: {e.data().storyHook}</span>
            </div>
        </div>
      </li>  
    )
  )
  
    return (
      <div className="container">
        <section className="welcome">
          <img src={scroll} alt="All for one, and one for all!"/>
          <div className="cta">
            <p className="t1">Welcome to Questlog</p>
            <p className="t2">Track your players easily and accurately without complictaed UIs, unnecessary accessories and buttons you're not even sure work.</p>
            <p className="t3">Select from a game below or create a new one.</p>
          </div>
        </section>
        
        <div className="hor-bar"></div>
        
        <section className="game-list">
          <ul>
            {gameCards}
          </ul>
        </section>
      </div>
    );
}

export default Home;
