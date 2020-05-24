import React from 'react';
import wilds from '../../assets/wilds.svg';
import battle from '../../assets/battle.svg';
import town from '../../assets/town.svg';

export default function Music() {
    
    
    return (
        <section className="music card">
            <span className="t3 music-text">Quest Music</span>
            <div className="music-box">
                <img src={town} alt="Music from Ye Olde City"></img>
                <span className="music-text t5">Town</span>
            </div>
            <div className="music-box">
                <img src={wilds} alt="Music from Ye Olde City"></img>
                <span className="music-text t5">The Wilds</span>
            </div>
            <div className="music-box">
                <img src={battle} alt="Music from Ye Olde City"></img>
                <span className="music-text t5">In Battle</span>
            </div>
        </section>
    )
}
