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

class Game extends Component {
  constructor(){
    super()
    this.state = {
      gameData:{},
      heroes: [],
      gameLog: [],
      gameId: '',
      charLive:[],
      dpUpdated: false
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
  // update a variable with some jsx to render to the dom when the component updates

  // current characters
  let heroes = this.state.heroes.map((char) => {
    return(
        <CharCard key={char.id}
          character={char}
          gameId={this.state.gameId}
          delete={()=>this.handleDelCharacter(char.index, char.id)}
          />       
    )
  })

// new character 
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
        </section>
        <section className="controls">
          {/* <GameDetails /> */}
          {/* <Music /> */}
        </section>
      </main>
    );
  }
}

export default withRouter(Game);
