import React,{ useState } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore().collection('games');

const GameDetails = (props) => {
  const [logHolder, setLogHolder] =  useState('Enter a new log')
  const [newLog, setNewLog] = useState('');

// METHODS
  const logChangeHandler = (e) =>{
    let newInput = e.target.value;
    setNewLog(newInput);
    console.log(newLog);
  }
  const submitLog = (e) =>{
    e.preventDefault();
    db.doc(props.gameId).collection('logbook').add(
      { 
        entry: newLog, 
        date: firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    .then(()=>{
      console.log('Log submitted')
      setLogHolder('Enter a new log')
    })
    .then(()=>{
      setNewLog('')
    })
    .then(()=>{
      window.location.reload(false)
    })
  }
  const deleteLog = (id) => {
    db.doc(props.gameId).collection('logbook')
      .doc(id).delete()
        .then(()=>{
          window.location.reload(false)
        })
  }

// RENDER DATA
  const storyLogs = props.logBook.map(log => {
    return (
      <div className="log-entry" key={log.id}>
        <div className="log-content">
          <span className="log-data">{log.entry}</span>
          <span className="log-time log-data">{`${log.date.toDate().getMonth()}/ ${log.date.toDate().getMonth()}`}</span>
        </div>
        <button className="button-lt log-btn" onClick={()=>deleteLog(log.id)}>X</button>
      </div>
    );
  });

  return (
    <div className="card game-controls">
      <section className="game-info">
        <h3 className="t2 game-title">{props.gameData.title}</h3>
        <span className="t4 game-text">{props.gameData.storyHook}</span>
        <span className="t5 game-text">{props.gameData.location}</span>
      </section>

      <section className="logbook">
        <form className="log">
          <input type="text"
            placeholder={logHolder}
            value={newLog}
            className="log-form"
            onChange={(e)=>logChangeHandler(e)}/>
          <button onClick={(e)=>submitLog(e)}
                className="button log-btn">+</button>
        </form>
        <div className="logs">
          {storyLogs}
        </div>
      </section>
      
    </div>
  );
}

export default GameDetails;
