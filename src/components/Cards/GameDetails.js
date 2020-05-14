import React from "react";

<<<<<<< HEAD
const gameData = {
  title: "Princes of the Apocalypse",
  location: "Faerun",
  storyHook:
    "The heroes have found themselves in a bar fight at the local inn, when a stranger pulls them aside to tell them this bar-fight is all an illusion."
};

export default function GameDetails() {
  return (
    <div className="card game-detail">
      <h3 className="t2">{gameData.title}</h3>
      <div className="game-text">
        <span className="t3">Setting: </span>
        <span>{gameData.location}</span>
      </div>
      <div className="game-text">
        <span className="t3">Story Hook: </span>
        <span>{gameData.storyHook}</span>
=======
// const gameData = {
//   title: "Princes of the Apocalypse",
//   location: "Faerun",
//   storyHook:
//     "The heroes have found themselves in a bar fight at the local inn, when a stranger pulls them aside to tell them this bar-fight is all an illusion."
// };

export default function GameDetails(props) {


  return (
    <div className="card game-detail">
      <h3 className="t2">{props.gameData.title}</h3>
      <div className="game-text">
        <span className="t3">Setting: </span>
        <span>{props.gameData.location}</span>
      </div>
      <div className="game-text">
        <span className="t3">Story Hook: </span>
        <span>{props.gameData.storyHook}</span>
>>>>>>> 4dee5fc0ca4ddf408d733af8112bb9ee98464625
      </div>
      
    </div>
  );
}
