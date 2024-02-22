import React from 'react';

const MusicApp: React.FC = () => {
    const audioRef = React.useRef<HTMLAudioElement>(null);

    const play = () => {
        audioRef.current?.play();
    }

    const pause = () => {
        audioRef.current?.pause();
    }

    return (
        <div>
            <h1>Music App</h1>
            <audio ref={audioRef}>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
        </div>
    );
}

export default MusicApp;