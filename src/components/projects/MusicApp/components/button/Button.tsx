
interface AudioButtonProps {
    audio: React.RefObject<HTMLAudioElement>;
    className?: string;
    children: React.ReactNode | string;
}
export const ButtonPlay: React.FC<AudioButtonProps> = ({ audio, className, children }) => {
    const play = () => {
        audio.current?.play();
    }

    return (
        <button className={className} onClick={play}>{children}</button>
    );
};

export const ButtonPause: React.FC<AudioButtonProps> = ({ audio, className, children }) => {
    const pause = () => {
        audio.current?.pause();
    }

    return (
        <button className={className} onClick={pause}>{children}</button>
    );
}

export const ButtonStop: React.FC<AudioButtonProps> = ({ audio, className, children }) => {
    const stop = () => {
        if (audio.current) {
            audio.current.pause();
            audio.current.currentTime = 0;
        }
    }

    return (
        <button className={className} onClick={stop}>{children}</button>
    );
}
