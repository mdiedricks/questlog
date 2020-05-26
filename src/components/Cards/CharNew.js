import React, {useState} from 'react'
import firebase from 'firebase/app';
// import { useDispatch } from 'react-redux';
// import { addChar } from '../../actions';


function CharNew(props) {
    const [charName, setCharName] = useState('');
    const [charLevel, setCharLevel] = useState(1)
    const [charRace, setCharRace] = useState('Human')
    const [charClass, setCharClass] = useState('Paladin')
    const [charHp, setCharHp] = useState(0)
    const [charAc, setCharAc] = useState(0)

    // const chars = useSelector(state => state.chars) ADD TO GAME
    // const dispatch = useDispatch();

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
        let newChar = {
            name: charName,
            level: charLevel,
            race: charRace,
            class: charClass,
            hp: charHp,
            ac: charAc
        };
        db.doc(props.gameId).collection('heroes').add(newChar)
        .then(()=>{
            setCharName('');
            setCharLevel(1);
            setCharRace('Human');
            setCharClass('Paladin');
            setCharHp(0);
            setCharAc(0);
        },)
        .then(()=>{
            // dispatch(addChar(newChar))
            // console.log('Char created')
            window.location.reload(false);
        },)
    }
    
    
    return (
        <div className="char-card character">
            <form action="submit" >
                <div className="column">
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
                        <label htmlFor="level">LV</label>
                            <input  type="number" 
                                    id="level" 
                                    placeholder="Level"
                                    onChange={handleLevelChange}
                                    value={charLevel}/>
                    </div>
                    <div className="char-stat">
                        <label htmlFor="hp">HP</label>
                            <input  type="number" 
                                    id="hp" 
                                    placeholder={charHp}
                                    onChange={handleHpChange}
                                    value={charHp}/>
                    </div>
                    <div className="char-stat">
                        <label htmlFor="ac">AC</label>
                            <input  type="number" 
                                    id="ac" 
                                    placeholder={charAc}
                                    onChange={handleAcChange}
                                    value={charAc}/>
                    </div>
                </section>
            </form>
            <div>
                <button className="button-lt char-btn" onClick={handleCreateCharacter}>+</button>
            </div>
        </div>
    )
}

export default CharNew;