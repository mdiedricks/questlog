import React from 'react'

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
