import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../components/DataProvider";

const Home = () => {
    const audioRef = useRef(null);
    const {user, setUser} = useContext(DataContext);

    useEffect(() => {
        audioRef.current.play();
    })

        return (
            <div>
                <img src="/wallpaper.jpg" alt="Example" style={{ width: '100vw', height: '94.7vh' }} />
                <audio ref={audioRef} src="/intro.mp3" />
            </div>
        )
    }
    export default Home;
