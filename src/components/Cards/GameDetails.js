import React from "react";

const gameData = {
  title: "Princes of the Apocalypse",
  location: "Faerun",
  storyHook:
    "The heroes have found themselves in a bar fight at the local inn, when a stranger pulls them aside to tell them this bar-fight is all an illusion."
};

export default function GameDetails() {
  
  return (
    <div className=" game-detail">
      <h3 className="t2">{gameData.title}</h3>
      <div className="game-text">
        <span className="t3">Setting: </span>
        <span>{gameData.location}</span>
      </div>
      <div className="game-text">
        <span className="t3">Story Hook: </span>
        <span>{gameData.storyHook}</span>
      </div>
      
    </div>
  );
}
