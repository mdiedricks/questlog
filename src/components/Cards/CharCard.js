import React, { useState } from 'react'
import firebase from 'firebase/app';

// import shield from '../../assets/shield.svg';
// import heart from '../../assets/heart.svg';
// import level from '../../assets/level.svg';

function CharCard(props) {
    const [charName, setCharName] = useState(props.character.name);
    const [charLevel, setCharLevel] = useState(props.character.level)
    const [charRace, setCharRace] = useState(props.character.race)
    const [charClass, setCharClass] = useState(props.character.class)
    const [charHp, setCharHp] = useState(props.character.hp)
    const [charAc, setCharAc] = useState(props.character.ac);
    const [charId, setCharId] = useState(props.character.id);
    
// Handlers
    const handleNameChange = (e) => {
        setCharName(e.target.value)
    }
    const handleLevelChange = (e) => {
        setCharLevel(e.target.value);
    }
    const handleRaceChange = (e) => {
        setCharRace(e.target.value);
    }
    const handleClassChange = (e) => {
        setCharClass(e.target.value);
    }
    const handleHpChange = (e) => {
        setCharHp(e.target.value);
    }
    const handleAcChange = (e) => {
        setCharAc(e.target.value);
    }    

// Firebase 
    const db = firebase.firestore().collection('games');

    const handleUpdateCharacter = (e) =>{
        e.preventDefault();
        console.log(props.character.id);
        db.doc(props.gameId).collection('heroes').doc(charId).set(
            {
                name: charName,
                level: charLevel,
                race: charRace,
                class: charClass,
                hp: charHp,
                ac: charAc,
                id: charId
            }
        )
        .then(()=>{
            // dispatch(addChar(newChar))
            console.log('Char updated')
            window.location.reload(false);
        },)
    }

    return (
        <div className="char-card character" name={props.character.id}>
            <form action="submit">
                <div>
                    <input  type="text" 
                        id="name" 
                        placeholder="Name"
                        onChange={handleNameChange}
                        value={charName}
                        className="char-name"/>
                </div>
                <div className="column">
                    <select id="race" 
                            onChange={handleRaceChange}
                            value={charRace}>
                        <option value="Human">Human</option>
                        <option value="Elf">Elf</option>
                        <option value="Dwarf">Dwarf</option>
                        <option value="Orc">Orc</option>
                    </select>
                    <select id="class" 
                            onChange={handleClassChange}
                            value={charClass}>
                        <option value="Paladin">Paladin</option>
                        <option value="Wizard">Wizard</option>
                        <option value="Warlock">Warlock</option>
                        <option value="Barbarian">Barbarian</option>
                    </select>
                </div>
                <section className="char-stats">
                    <div className="char-stat">
                        <label htmlFor="hp">LV</label>
                        <input  type="number" 
                                    id="level" 
                                    placeholder="Level"
                                    onChange={handleLevelChange}
                                    value={charLevel}
                                    className="stat"/>
                    </div>
                    <div className="char-stat">
                        <label htmlFor="hp">HP</label>
                            <input  type="number" 
                                    id="hp" 
                                    placeholder={charHp}
                                    onChange={handleHpChange}
                                    value={charHp}
                                    className="stat"/>
                    </div>
                    <div className="char-stat">
                        <label htmlFor="ac">AC</label>
                            <input  type="number" 
                                    id="ac" 
                                    placeholder={charAc}
                                    onChange={handleAcChange}
                                    value={charAc}
                                    className="stat"/>
                    </div>
                </section>
            </form>
            <div className="char-btns">
                <button className="button char-btn" onClick={(e)=>handleUpdateCharacter(e)}>U</button>
                <button className="button char-btn" onClick={props.delete}>X</button>
            </div>
        </div>
    )
}

export default CharCard
