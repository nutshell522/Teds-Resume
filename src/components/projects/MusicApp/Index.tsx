import React, { useState, useRef } from 'react';
import { ButtonPlay, ButtonPause, ButtonStop } from './components/button/Button';

const MusicApp: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [volume, setVolume] = useState(1);

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div>
            <h1>Music App</h1>
            <audio ref={audioRef} preload='metadata'>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <ButtonPlay audio={audioRef}>Play</ButtonPlay>
            <ButtonPause audio={audioRef}>Pause</ButtonPause>
            <ButtonStop audio={audioRef}>Stop</ButtonStop>
            <div>
                <label htmlFor="volumeControl">Volume:</label>
                <input
                    type="range"
                    id="volumeControl"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
        </div>
    );
}

export default MusicApp;