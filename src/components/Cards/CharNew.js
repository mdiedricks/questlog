import React, {useState} from 'react'
import firebase from 'firebase/app';

function CharNew(props) {

    const [charName, setCharName] = useState('');
    const [charLevel, setCharLevel] = useState(1)
    const [charRace, setCharRace] = useState('Human')
    const [charClass, setCharClass] = useState('Paladin')
    const [charHp, setCharHp] = useState(0)
    const [charAc, setCharAc] = useState(0)

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

    const handleCreateCharacter = (e) =>{
        e.preventDefault();
        db.doc(props.gameId).collection('heroes').add({
            name: charName,
            level: charLevel,
            race: charRace,
            class: charClass,
            hp: charHp,
            ac: charAc
        },)
        .then(()=>{
            setCharName('');
            setCharLevel(1);
            setCharRace('Human');
            setCharClass('Paladin');
            setCharHp(0);
            setCharAc(0);
        },)
        .then(()=>{
            console.log('Char created')
        },)
        
    }
    
    
    return (
        <div className="card">
            <form action="submit" onSubmit={handleCreateCharacter}>
                <label htmlFor="name">Name</label>
                    <input  type="text" 
                            id="name" 
                            placeholder="Name"
                            onChange={handleNameChange}
                            value={charName}/>
                <label htmlFor="level">Level</label>
                    <input  type="number" 
                            id="level" 
                            placeholder="Level"
                            onChange={handleLevelChange}
                            value={charLevel}/>
                <label htmlFor="race">Race</label>
                <select id="race" 
                        onChange={handleRaceChange}
                        value={charRace}>
                    <option value="Human">Human</option>
                    <option value="Elf">Elf</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Orc">Orc</option>
                </select>
                <label htmlFor="class">Class</label>
                <select id="class" 
                        onChange={handleClassChange}
                        value={charClass}>
                    <option value="Paladin">Paladin</option>
                    <option value="Wizard">Wizard</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Barbarian">Barbarian</option>
                </select>
                <label htmlFor="hp">HP</label>
                    <input  type="number" 
                            id="hp" 
                            placeholder={charHp}
                            onChange={handleHpChange}
                            value={charHp}/>
                <label htmlFor="ac">AC</label>
                    <input  type="number" 
                            id="ac" 
                            placeholder={charAc}
                            onChange={handleAcChange}
                            value={charAc}/>
                <button className="btn-flat">Add</button>
            </form>
        </div>
    )
}

export default CharNew;