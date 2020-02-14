import React from "react";
import "../../assets/fighter.jpg";

const creeps = [
  {
    name: "Saruman",
    race: "Human",
    class: "Sorcerer",
    hp: "60",
    ac: "16",
    level: "12"
  },
  {
    name: "Shagrath",
    race: "Orc",
    class: "Warrior",
    hp: "30",
    ac: "9",
    level: "6"
  },
  {
    name: "Gothmog",
    race: "Orc",
    class: "Barbarian",
    hp: "48",
    ac: "14",
    level: "9"
  }
];

export default function CharList() {
  return (
    <div className="col l4 m8 s12">
      <h5>Creeps</h5>
      <ul list-style-type="none">
        {creeps.map(e => (
          <li key={e.name}>
            <div className="card horizontal small brown lighten-3 z-depth-2">
              <div className="card-image">
                <img src="https://i.redd.it/q4p3mqgg9is31.png" alt="creep" />
              </div>
              <div className="card-stacked">
                <div className="card-content">
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
