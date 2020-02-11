import React from "react";

const gameData = {
  title: "Princes of the Apocalypse",
  location: "Faerun",
  storyHook:
    "The heroes have found themselves in a bar fight at the local inn, when a stranger pulls them aside to tell them this bar-fight is all an illusion."
};

export default function GameDetails() {
  return (
    <div className="col l4 m8 s12">
      <h3>{gameData.title}</h3>
      <span>Setting: {gameData.location}</span>
      <p>Story Hook: {gameData.storyHook}</p>
    </div>
  );
}
