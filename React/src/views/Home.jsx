import { useEffect, useRef } from "react";

const Home = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play();
    })

        return (
            <div>
                <img src="/wallpaper.jpg" alt="Example" style={{ width: '100vw', height: '94.6vh' }} />
                <audio ref={audioRef} scr="/intro.mp3" />
            </div>
        )
    }
    export default Home;
