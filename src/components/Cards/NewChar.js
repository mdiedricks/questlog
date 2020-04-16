import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default function NewChar(props) {
    const queryParam = useParams();
    const GameId = queryParam.id;
    const [name, setName] = useState('');
    const [level, setLevel] = useState(0);
    const [race, setRace] = useState('');
    const [charClass, setClass] = useState('');
    const [hp, setHP] = useState(0);
    const [ac, setAC] = useState(0);

    const db = firebase.firestore().collection('games').doc(GameId).collection('heroes');

    function createChar(){
        db.add({
            name: name,
            level: level,
            race: race,
            class: charClass,
            hp: hp,
            ac: ac
        })
        .then(()=>{
            console.log("Character created successfully!")
        })
        .catch((error)=>{
            console.error(`Error creating char: ${error}`)
        })
    }
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleLevelChange = (e) => {
        setLevel(e.target.value);
    }
    const handleRaceChange = (e) => {
        setRace(e.target.value);
    }
    const handleClassChange = (e) => {
        setClass(e.target.value);
    }
    const handleHPChange = (e) => {
        setHP(e.target.value);
    }
    const handleACChange = (e) => {
        setAC(e.target.value);
    }

    const handleSubmit = ((e) => {
        e.preventDefault();
        createChar();
        props.controls.hideModal();
    })

    return (
        <div className="screen">
            <div className="card newChar">
            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" 
                    id="name" 
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}/>
                <label htmlFor="level">Level</label>
                <input type="number" 
                    id="level" 
                    placeholder="Level"
                    onChange={handleLevelChange}/>
                <label htmlFor="race">Race</label>
                <select id="race" onChange={handleRaceChange}>
                    <option value="Human">Human</option>
                    <option value="Elf">Elf</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Orc">Orc</option>
                </select>
                <label htmlFor="class">Class</label>
                <select id="class" onChange={handleClassChange}>
                    <option value="Paladin">Paladin</option>
                    <option value="Wizard">Wizard</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Barbarian">Barbarian</option>
                </select>
                <label htmlFor="hp">HP</label>
                <input type="number" 
                    id="hp" 
                    placeholder="Enter hit points"
                    onChange={handleHPChange}/>
                <label htmlFor="ac">AC</label>
                <input type="number" 
                    id="ac" 
                    placeholder="Enter armour class"
                    onChange={handleACChange}/>
                <span className="controls">
                    <button className="">Add</button>
                </span>
            </form>
            </div>
        </div>
    )
}
