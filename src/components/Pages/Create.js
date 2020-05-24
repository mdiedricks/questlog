import React, { useState } from "react";
import firebase from 'firebase/app';
// import {useHistory} from 'react-router-dom';

const db = firebase.firestore().collection('games');

const Create = () => {
  const [gameTitle, setGameTitle] = useState('');
  const [gameLocation, setGameLocation] = useState('');
  const [gameStoryHook, setGameStoryHook] = useState('');
    

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
    db.add({
      title: gameTitle,
      location: gameLocation,
      storyHook: gameStoryHook,
    })
    .then(function() {
      console.log(`Document: ${gameTitle} successfully written!`);
      
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  };

    return (
      
        <div className="container">
              <section className="card form">
                <form onSubmit={handleSubmit} >
                  <h1 className="form-title">Create new game</h1>
                  <div className="input-field">
                    <label htmlFor="title" className="form-text">Title</label>
                    <input
                      className="form-input"
                      type="text"
                      id="title"
                      placeholder="My Next Adventure..."
                      value = {gameTitle}
                      required
                      onChange={handleTitle}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="location" className="form-text">Location</label>
                    <input
                      className="form-input"
                      placeholder="Over the hills..."
                      type="text"
                      id="location"
                      value={gameLocation}
                      required
                      onChange={handleLocation}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="storyHook" className="form-text">Story hook</label>
                    <textarea
                      className="form-input"
                      placeholder="So a wizard walks into a bar..."
                      rows="4"
                      cols="50"
                      type="text"
                      id="storyHook"
                      value={gameStoryHook}
                      onChange={handleStoryHook}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <button className="button">Create</button>
                  </div>
                </form>
              </section>     
        </div>
      
    );
}

export default Create;
