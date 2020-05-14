import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';



const creeps = [
  {
    name: "Saruman",
    race: "Human",
    class: "Sorcerer",
    hp: "60",
    ac: "16",
    level: "12"
  },
  {
    name: "Shagrath",
    race: "Orc",
    class: "Warrior",
    hp: "30",
    ac: "9",
    level: "6"
  },
  {
    name: "Gothmog",
    race: "Orc",
    class: "Barbarian",
    hp: "48",
    ac: "14",
    level: "9"
  }
];

export default function CharList() {
  const [userChars, setUserChars] = useState([]);
  const queryParam = useParams();
  const GameId = queryParam.id;

  const db = firebase.firestore().collection('games').doc(GameId).collection('creeps');

  const getCreeps = () => {
    let creepList = [];
    db.get()
    .then((snapshot) => {
      snapshot.docs.forEach(doc => {
      creepList.push(doc.data());
      setUserChars(creepList);
      })
    })
  }

  useEffect(() => getCreeps(), []);

  return (
    <section className="characters">
      <h5>Creeps</h5>

      <ul list-style-type="none">
        {userChars.map((e, index) => (
          <li key={index}>
              <h6>{e.name}</h6>
          </li>
        ))}
      </ul>

      <button className="btn-flat">Add</button>

    </section>
  );
}
