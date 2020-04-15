import React from 'react'

export default function NewChar() {
    return (
        <div className="card">
            <form action="submit">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name"/>
                <label htmlFor="level">Level</label>
                <input type="number" id="level" placeholder="Level"/>
                <label htmlFor="race">Race</label>
                <select id="race">
                    <option value="Human">Human</option>
                    <option value="Elf">Elf</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Orc">Orc</option>
                </select>
                <label htmlFor="class">Class</label>
                <select id="class">
                <option value="Paladin">Paladin</option>
                <option value="Wizard">Wizard</option>
                <option value="Warlock">Warlock</option>
                <option value="Barbarian">Barbarian</option>
                </select>
                <label htmlFor="hp">HP</label>
                <input type="number" id="hp" placeholder="Enter hit points"/>
                <label htmlFor="ac">AC</label>
                <input type="number" id="ac" placeholder="Enter armour class"/>
                <button className="btn-flat">Add</button>
            </form>
        </div>
    )
}
