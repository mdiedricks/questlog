import React, { useContext, useState, useEffect } from "react";
import firebase from 'firebase';
import {AuthContext} from '../auth/Auth';

const DashCreate = () => {
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [storyHook, setStoryHook] = useState('');

  const games = firebase.firestore().collection('games');
  const { currentUser } = useContext(AuthContext)

  useEffect(()=> {
    compLoaded() 
  }, []) 

  const compLoaded = async() => {
    // CHECK IF USER IS CURRENTLY LOGGED IN
    if (currentUser) {
      setUser({...user, user: currentUser});
      console.log('Create user is: ', user);
    } else {
      console.log('User not available');
    }

    const currUser = await firebase.auth().currentUser.uid;
    console.log(currUser);
    setUser({...user, user: currUser})
  }

  // const printState = () => {
  //   console.log(`The title of youre new game is ${title}`)
  // }

  const handleSubmit = e => {
    e.preventDefault();
    games.doc(title).set({
      title: title,
      location: location,
      storyHook: storyHook
    })
    .then(function() {
        console.log(`Document: ${title} successfully written!`);
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

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
                      value = {title}
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      value={location}
                      required
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="storyHook">Story hook</label>
                    <textarea
                      type="text"
                      id="storyHook"
                      value={storyHook}
                      onChange={(e) => setStoryHook(e.target.value)}
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
