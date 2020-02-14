import React, { useContext, useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import {AuthContext} from '../auth/Auth';
import firebase from 'firebase';
import 'firebase/firestore';


const DashHome = () => {
  const [userGames, setUserGames] = useState([]);
  const [UID, setUID] = useState('');
  const { userID } = useContext(AuthContext);
  // USING MY OWN STATE CONTAINERS
  let bUID = UID
  let userGameList = []

  useEffect(()=> {
    compLoaded() 
  }, [])

  const compLoaded = async() => {
    // CHECK IF USER IS CURRENTLY LOGGED IN
    if (userID != null) {
      setUID(userID);
      bUID = userID;      
    } else {
      console.log('User not available');
    }

    // SET UP ALL THE FIREBASE SHORTFORMS FOR QUERYING
    const games = firebase.firestore().collection('games');
    let gameList = [];

    // GET LIST OF GAMES CREATED BY CURRENT USER
    games.where('uid', '==', bUID).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.id);
        gameList.push(doc);
        // .data()
        })
        // console.log("This is a : " + typeof gameList);
        setUserGames(gameList);
        // console.log("State: ", gameList)
        userGameList = gameList;
        // console.log("Variable: ", userGameList);
        
        userGames.map(e => (
          console.log(`Game: ${e.title}`)
        ))
      })
  }

    return (
    <div className="container">
      <div className="row">
        <h2>Welcome to Questlog</h2>
        <p>You are now on your home dashboard.</p>
        <p>If you have created any games, they will be displayed below.</p>
        <div className="divider"></div>
        <div className="row">
          <div className="col l3 m2 s1"></div>
          <div className="col l6 m8 s10">
          <ul>
            {userGames.map(e => (
              <Link to={`/game/${e.data().uid}`} key={e.id}>
                <li>
                  <div className="card horizontal small grey lighten-3 z-depth-2">
                    <div className="card-stacked">
                      <div className="card-content small left-align">
                        <h3>{e.data().title}</h3>
                        <p>Location: {e.data().location}</p>
                        <p>Story Hook: {e.data().storyHook}</p>
                      </div>
                      <div className="right-align">
                        <div className="btn-flat">
                          <i className="tiny material-icons">edit</i>
                        </div >
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          </div>
          
          <div className="col l3 m2 s1"></div>
        </div>
      </div>
    </div>
  );

}

export default DashHome;
