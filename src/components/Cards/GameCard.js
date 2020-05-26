import React from 'react';
import { Link } from 'react-router-dom';
import sword from '../../assets/sword.svg';

const GameCard =(props)=> {
    return (
        <section className="card game-card">
            <div className="card-image">
                <img src={sword} alt="Enter battle!"/>
            </div>
            <div >
                <Link to={`/game/${props.game.id}`} >
                    <span className="t2 card-title">{props.game.data().title}</span>
                </Link>
                <span className="t4 card-text">{props.game.data().storyHook}</span>
                <span className="t5 card-location">{props.game.data().location}</span>
            </div>
            <button className="button char-btn game-delete" onClick={props.deleteGame}>X</button>
        </section>
    )
}

export default GameCard;