import React from 'react'

<<<<<<< HEAD
function CharCard(props) {
    return (
        <div className="card">
            <span className="char">{props.name}</span>
            <p>Race: {props.race}</p>
            <p>Class: {props.class}</p>
            <p>HP: {props.hp}</p>
            <p>AC: {props.ac}</p>
            <p>Level: {props.level}</p>
        </div>
    )
}

export default CharCard
=======
export default function CharCard(props) {


    return (
        <div key={props.charData.id} className="card character">
            
            <span className="char-title"id="name">{props.charData.name}</span>
            <span className="char-text" id="race">{props.charData.race}</span>
            <span className="char-text" id="class">{props.charData.class}</span>
            <div className="char-stats">
              <span className="stat">
                <img src={heart} alt="Hit Points" className="stat-icon"/>
                <span className="hp">{props.charData.hp}</span>
              </span>

              <span className="stat">
                <img src={shield} alt="Armour Class" className="stat-icon"/>
                <span className="ac">{props.charData.ac}</span>
              </span>

              <span className="stat">
                <img src={level} alt="Level" className="stat-icon"/>
                <span className="level">{props.charData.level}</span>
              </span>

              
            </div>
            <span className="controls">
              <button onClick={props.charFunc.handleDelete}>X</button>
              <button onClick={props.charFunc.handleEdit}>E</button>
              <button onClick={props.charFunc.handleUpdate}>O</button>
            </span>
          </div>
    )
}
>>>>>>> 4dee5fc0ca4ddf408d733af8112bb9ee98464625
