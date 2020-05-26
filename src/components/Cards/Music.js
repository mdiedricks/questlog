import React, { useState, useRef } from 'react';
import audioWilds from '../../assets/forest.mp4';
import audioBattle from '../../assets/battle.mp4';
import audioTown from '../../assets/town.mp4';
import wilds from '../../assets/wilds.svg';
import battle from '../../assets/battle.svg';
import town from '../../assets/town.svg';

export default function Music() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [wasPlaying, setWasPlaying] = useState(false);
    const [curSong, setCurSong] = useState('');
    const [lastSong, setLastSong] = useState(''); 
    const audioPlayer = useRef(null);

    // if(curSong !== lastSong){
    //     let song;
    //     switch(curSong){
    //         case 'In Town':
    //             song = audioTown;
    //             setLastSong('In Town');
    //             break;
    //         case 'In the Wilds':
    //             song = audioWilds;
    //             setLastSong('In the Wilds');
    //             break;
    //         case 'In Battle':
    //             song = audioBattle;
    //             setLastSong('In Battle');
    //             break;
    //         default:
    //             break;
    //     }
    //     if(song){
    //         setCurSong(song);
    //         audioPlayer.play();
    //         setIsPlaying(true);
    //         setWasPlaying(true);
    //     }
    // }

    // if(wasPlaying !== isPlaying){

    // }
    
    return (
        <section className="music card">
            <audio src={curSong} ref={audioPlayer}/>
            <span className="t3 music-text">Quest Music</span>
            <div className="music-box" onClick={()=>setCurSong('In Town')}>
                    <img src={town} 
                        alt="Music from Ye Olde City"
                        name="town"/>
                <span className="music-text t5">Town</span>
            </div>
            <div className="music-box" onClick={()=>setCurSong('In the Wilds')}>
                <img src={wilds} 
                    alt="Sounds of the forest"
                    name="wilds"/>
                
                <span className="music-text t5">The Wilds</span>
            </div>
            <div className="music-box" onClick={()=>setCurSong('In Battle')}>
                <img src={battle} 
                    alt="The clashing of swords"
                    name="battle"/>
                
                <span className="music-text t5">In Battle</span>
            </div>
        </section>
    )
}
