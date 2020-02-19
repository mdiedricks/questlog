import React, { useContext, useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import {AuthContext} from '../auth/Auth';
import firebase from 'firebase';
import 'firebase/firestore';
import "../../assets/fighter.jpg";

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

export default function CharList() {
  const [userChars, setUserChars] = useState([]);
  const [UID, setUID] = useState('');
  const { userID } = useContext(AuthContext);  
  // let bUID = UID;
  const queryParam = useParams();
  const thisGameId = queryParam.id;

  useEffect(()=> {
    compLoaded() 
  }, [])

  const compLoaded = async() => {
    // CHECK IF USER IS CURRENTLY LOGGED IN
    if (userID != null) {
      setUID(userID);
      // bUID = userID;      
    } else {
      console.log('User not available');
    }

    // SET UP ALL THE FIREBASE SHORTFORMS FOR QUERYING
    const creeps = firebase.firestore().collection('games').doc(thisGameId).collection('creeps');
    let creepList = [];

    // GET LIST OF GAMES CREATED BY CURRENT USER
    creeps.get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        // console.log(doc);
        creepList.push(doc);
        // .data()
        })
        // console.log("This is a : " + typeof gameList);
        setUserChars(creepList);
        // console.log(heroList);
        
        userChars.map(e => (
          console.log(`Hero: ${e.name}`)
        ))
      })
  } 

  
  
  return (
    <div className="col l4 m8 s12">
      <h5>Creeps</h5>
      <ul list-style-type="none">
        {userChars.map(e => (
          <li key={e.id}>
            <div className="card horizontal small brown lighten-5 z-depth-2">
              <div className="card-image">
                <img
                  src="https://i.pinimg.com/originals/57/ca/6d/57ca6d159674aee8d0e01166850dd8e4.jpg"
                  alt={e.data().name}
                />
              </div>
              <div className="card-stacked">
                <div className="card-content small left-align">
                  <span className="char-title">{e.data().name}</span>
                  <p>Race: {e.data().race}</p>
                  <p>Class: {e.data().class}</p>
                  <p>HP: {e.data().hp}</p>
                  <p>AC: {e.data().ac}</p>
                  <p>Level: {e.data().level}</p>
                </div>
                <div className="right-align">
                  <div className="btn-flat">
                    <i className="tiny material-icons">edit</i>
                  </div >
                  <div className="btn-flat">
                    <i className="tiny material-icons">close</i>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button className="btn-flat">
        <i className="tiny material-icons">person_add</i>
      </button>
    </div>
  );
}
