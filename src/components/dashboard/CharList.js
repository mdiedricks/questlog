import React from "react";
// import Character from "./cards/Character";
// import NPCharacter from "./cards/NPCharacter";

const heroes = [
  {
    name: "Deothas",
    race: "Human",
    class: "Paladin",
    hp: "35",
    ac: "13",
    level: "5"
  },
  {
    name: "Cylril",
    race: "Half-elf",
    class: "Warlock",
    hp: "23",
    ac: "12",
    level: "4"
  },
  {
    name: "Dendril",
    race: "Orc",
    class: "Barbarian",
    hp: "50",
    ac: "12",
    level: "5"
  }
];

export default function CharList() {
  return (
    <div className="col l4 m8 s12">
      <h5>Heroes</h5>
      <ul list-style-type="none">
        {heroes.map(e => (
          <li key={e.name}>
            <div className="card horizontal small light-green lighten-3 z-depth-2">
              <div className="card-image">
                <img
                  src="https://i.pinimg.com/originals/57/ca/6d/57ca6d159674aee8d0e01166850dd8e4.jpg"
                  alt="hero"
                />
              </div>
              <div className="card-stacked">
                <div className="card-content small left-align">
                  <h5>{e.name}</h5>
                  <p>Race: {e.race}</p>
                  <p>Class: {e.class}</p>
                  <p>HP: {e.hp}</p>
                  <p>AC: {e.ac}</p>
                  <p>Level: {e.level}</p>
                </div>
                <div className="card-action">
                  <button className="btn-flat">
                    <i className="tiny material-icons">edit</i>
                  </button>
                  <button className="btn-flat">
                    <i className="tiny material-icons">close</i>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button className="btn-flat">
        <i className="tiny material-icons">person_add</i>
      </button>
    </div>
  );
}
