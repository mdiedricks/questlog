import React, { useContext, useState, useEffect } from "react";
import {AuthContext} from '../auth/Auth';
import firebase from 'firebase';
import 'firebase/firestore';

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

export default function CharList(props) {
  const [userChars, setUserChars] = useState([]);
  const [UID, setUID] = useState('');
  const { userID } = useContext(AuthContext);  
  // let bUID = UID;
  let userCharList = [];
  
  const queryParam = this.props.match.params;
  // console.log('Initial log: ', queryParam);

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
    const heroes = firebase.firestore().collection('games').doc(queryParam).collection('heroes');
    let heroList = [];

    // GET LIST OF GAMES CREATED BY CURRENT USER
    heroes.get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        // console.log(doc);
        heroList.push(doc);
        // .data()
        })
        // console.log("This is a : " + typeof gameList);
        setUserChars(heroList);
        console.log(heroList);
        userCharList = heroList;
        console.log( userCharList);
        
        userChars.map(e => (
          console.log(`Hero: ${e.name}`)
        ))
      })
  }
  



  return (
    <div className="col l4 m8 s12 dash-container">
      <h5>Heroes</h5>
      <ul list-style-type="none">
        {userChars.map(e => (
          <li key={e.id}>
            <div className="card horizontal small orange lighten-5 z-depth-2">
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
    </div >
  );
}
