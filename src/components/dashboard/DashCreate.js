import React, { useContext, useState, useEffect } from "react";
import firebase from 'firebase';
import {AuthContext} from '../auth/Auth';
import {Link} from 'react-router-dom';

const DashCreate = () => {
  const { userID } = useContext(AuthContext)
  const [UID, setUID] = useState('');
  const [gameTitle, setGameTitle] = useState('');
  const [gameLocation, setGameLocation] = useState('');
  const [gameStoryHook, setGameStoryHook] = useState('');
  
  let bUID = UID
  
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
  }

  //DECLARING FIREBASE SHORTFORMS FOR POSTING
  const games = firebase.firestore().collection('games');

  const handleTitle = ((e) => {
    setGameTitle(e.target.value)
    console.log(gameTitle);
  });
  const handleLocation = ((e) => {
    setGameLocation(e.target.value)
    console.log(gameLocation);
  });
  const handleStoryHook = ((e) => {
    setGameStoryHook(e.target.value)
    console.log(gameStoryHook);
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(games);
    games.add({
      title: gameTitle,
      location: gameLocation,
      storyHook: gameStoryHook,
      uid: UID
    })
    // .then(function() {
    //     console.log(`Document: ${gameTitle} successfully written!`);
    // })
    // .catch(function(error) {
    //     console.error("Error writing document: ", error);
    // });
  };


    return (
      <div>
        <div className="container">
          <div className="container row">
            <div className="col l2 m2 s1"></div>
              <div className="col l8 m8 s10">
                <form onSubmit={() => handleSubmit()} className="white">
                  <h5 className="grey-text text-darken-3">Create new game</h5>
                  <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      value = {gameTitle}
                      required
                      onChange={handleTitle}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      value={gameLocation}
                      required
                      onChange={handleLocation}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="storyHook">Story hook</label>
                    <textarea
                      type="text"
                      id="storyHook"
                      value={gameStoryHook}
                      onChange={handleStoryHook}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                  </div>
                </form>
              </div>     
            <div className="col l2 m2 s1"></div>
          </div>
        </div>
      </div>
    );
}

export default DashCreate;
