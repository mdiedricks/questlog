import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

import shield from '../../assets/shield.svg';
import heart from '../../assets/heart.svg';
import level from '../../assets/level.svg';

const heroes = [
  {
    name: "Deothas",
    race: "Human",
    class: "Paladin",
    hp: "35",
    ac: "13",
    level: "5"
  },
  {
    name: "Cylril",
    race: "Half-elf",
    class: "Warlock",
    hp: "23",
    ac: "12",
    level: "4"
  },
  {
    name: "Dendril",
    race: "Orc",
    class: "Barbarian",
    hp: "50",
    ac: "12",
    level: "5"
  }
];

export default function CharList(props) {
  const [userChars, setUserChars] = useState([]);
  const queryParam = useParams();
  const GameId = queryParam.id;

  const db = firebase.firestore().collection('games').doc(GameId).collection('heroes');

  function getChars() {
    console.log(`Querying db...`)
    let heroList = [];
    
    db.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        heroList.push(doc.data());
      })
      setUserChars(heroList)
    },)
    .then(
      )
  }

  useEffect(() => {
    getChars()
  }, [])

  const handleDelete = (e) =>{
    console.log("Delete clicked...")
  }

  const handleUpdate = (e) =>{
    console.log("Character saved...")
  }
  
  return (
    <section className="characters">
        <span className="t3">Heroes</span>
      <ul>
        {heroes.map((e,index) => (
          <li key={index} className="card character">
            
            <input className="char-title" value={e.name}></input>
            <input className="char-text" value={e.race}></input>
            <input className="char-text" value={e.class}></input>
            <div className="char-stats">
              <span className="stat">
                <img src={heart} alt="Hit Points" className="stat-icon"/>
                <span className="hp">{e.hp}</span>
              </span>

              <span className="stat">
                <img src={shield} alt="Armour Class" className="stat-icon"/>
                <span className="ac">{e.ac}</span>
              </span>

              <span className="stat">
                <img src={level} alt="Level" className="stat-icon"/>
                <span className="level">{e.level}</span>
              </span>

              
            </div>
            <span className="controls">
              <button onClick={handleDelete}>X</button>
              <button onClick={handleUpdate}>O</button>
            </span>
          </li>
        ))}
      </ul>
      
      
    </section>
  );
}
