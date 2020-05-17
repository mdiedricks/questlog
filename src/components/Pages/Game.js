import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

import GameDetails from "../Cards/GameDetails";
import CharNew from '../Cards/CharNew';

const db = firebase.firestore().collection('games');
let heroList = [];

class Game extends Component {
  constructor(){
    super()
    this.state = {
      gameData:{},
      heroes: [],
      gameLog: [],
      gameId: ''
    }
  }
  
  componentDidMount() {
    //GET heroes from database
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
  
  // Methods - character
  handleCreateCharacter = (e, name, level, race, cClass, hp, ac) => {
    e.preventDefault();
    db.doc(this.props.match.params.id).collection('heroes').add({
        name: name,
        level: level,
        race: race,
        class: cClass,
        hp: hp,
        ac: ac
    })
    .catch(err=>{
      console.log('There was and error createing your character', err)
    })
    .then(()=>{

      console.log('Char updated')
    },)    
  }
  handleUpdateCharacter = (id) =>{
    console.log(`Open CharUpdate modal: ${id}`);
  }
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

  let heroes = this.state.heroes.map((char, id, index) => {
    return(
      <div key={id}>
        <h6>{char.name}</h6>
        <p>{char.race}</p>
        <button onClick={()=>this.handleDelCharacter(index, char.id)}>X</button>
        <button onClick={() => this.handleUpdateCharacter(char.id)}>E</button>
      </div>
    )
  })
  let newCharButton = (<button onClick={()=>this.handleCreateCharacter()}>Add</button>)

  if (this.state.heroes.length>4){
      newCharButton = <div></div>
  }


    return (
      <section className="container game-content">
          <div className="characters">
            <h1>Heroes</h1>
            {heroes}
            {newCharButton}
          </div>       
          <div className="fragment"></div>
          {/* <GameDetails /> */}
          <CharNew 
            newChar={(event)=>this.handleCreateCharacter(event)}
            gameId={this.state.gameId}/>
          <div className="fragment"></div>
      </section>
    );
  }
}

export default withRouter(Game);
