import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

import GameDetails from "../Cards/GameDetails";
import CharCard from '../Cards/CharCard';
import CharNew from '../Cards/CharNew';
import Music from '../Cards/Music';

const db = firebase.firestore().collection('games');
let heroList = [];
let tempGameData = {};
let tempLogbook = [];

class Game extends Component {
  constructor(){
    super()
    this.state = {
      gameData:{},
      heroes: [],
      gameLog: [],
      gameId: '',
      charLive:[]
    }
  }
  
  componentDidMount() {
    
    //GET HEROES FROM DB
    db.doc(this.props.match.params.id).collection('heroes').get()
      .then(snapshot =>{
        snapshot.forEach(doc => {
          heroList.push(doc.data());
          heroList[heroList.length-1].id = doc.id;
        },)
        this.setState({heroes: heroList})
      })
      this.setState({ gameId: this.props.match.params.id})
    
    
    //GET GAME INFO FROM DB
    db.doc(this.props.match.params.id).get()
      .then(snapshot=>{
        tempGameData = snapshot.data();
        return tempGameData
      })
      .then(()=>{
        this.setState({gameData:tempGameData})
      })
    
    
      //GET GAME LOGBOOK FROM DB
    db.doc(this.props.match.params.id).collection('logbook').get()
      .then(snapshot=>{
        snapshot.forEach(doc=>{
          let newLogObj = doc.data();
          let newLogId = doc.id;
          newLogObj.id = newLogId;
          tempLogbook.push(newLogObj);
        })
      })
      .then(()=>{
        tempLogbook.sort((a,b)=>b.date-a.date)
        this.setState({gameLog:tempLogbook})
      })
  }

    // CHARACTER METHODS
    handleDelCharacter = (index, id) => {
      db.doc(this.props.match.params.id).collection('heroes')
        .doc(id).delete()
        .then(()=>{
          let curHeroes = this.state.heroes;
          curHeroes.splice(index, 1);
          this.setState({heroes: curHeroes});
          console.log('Char deleted')
        },)
        .catch(err=>{
          console.log("Error removing document: ", err)
        })
    }

    render() {
      // CALCULATE EXTRA CHARACTER DIVS
      let spareDivsCount = 4-(this.state.heroes.length);
      let spareDivs = [];
      for(let i=spareDivsCount; i>0; i--){
        spareDivs.push(<div key={i}></div>)    
      }
      // RENDER CHARACTER CARDS
      let heroes = this.state.heroes.map((char) => {
        return(
          <CharCard key={char.id}
            character={char}
            gameId={this.state.gameId}
            delete={()=>this.handleDelCharacter(char.index, char.id)}
            />
        )
      })
      // NEW CHARACTER COMPONENT 
      let newChar = (
        <CharNew 
          gameId={this.state.gameId}/>
      )
      if (this.state.heroes.length>4){
          newChar = <div></div>
      }

      return (
        <main className="container game-content">
          <section className="characters"> 
            {heroes}
            {newChar}
            {spareDivs}
          </section>
          <section className="controls">
            <GameDetails 
              gameId={this.state.gameId}
              gameData={this.state.gameData}
              logBook={this.state.gameLog}/> 
            <Music />
          </section>
        </main>
      );
  }
}

export default withRouter(Game);
