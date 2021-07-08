import React, {useState} from 'react';
import Input from "./Input";
import Buttons from './Buttons';
import Clues from './Clues';
import "./css/Buttons.css";
import "./css/Game.css";




function Game() {
    console.log("GAME COMPONENT LOADED");
    const [musicList, setMusicList] = useState([]);
    const [knownMusicClues, setKnownMusicClues] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [knownMovieClues, setKnownMovieClues] = useState([]);
    const [gameList, setGameList] = useState([]);
    const [knownGameClues, setKnownGameClues] = useState([]);
    const [eventList, setEventList] = useState([]);
    const [knownEventClues, setKnownEventClues] = useState([]);
    const [year, setYear] = useState("");
    const [guess, setGuess] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [activeClue, setActiveClue] = useState(0);
    return(
        <div>
            <Input 
                year={year} 
                setYear={setYear} 
                setGuess={setGuess}
                musicList={musicList} 
                setMusicList={setMusicList} 
                movieList={movieList} 
                setMovieList={setMovieList} 
                gameList={gameList} 
                setGameList={setGameList}
                eventList={eventList}
                setEventList={setEventList}
                loaded={loaded}
                setLoaded={setLoaded}
            />
            <Buttons 
                musicList={musicList} 
                setMusicList={setMusicList}
                knownMusicClues={knownMusicClues} 
                setKnownMusicClues={setKnownMusicClues} 
                movieList={movieList} 
                setMovieList={setMovieList} 
                knownMovieClues={knownMovieClues} 
                setKnownMovieClues={setKnownMovieClues}
                gameList={gameList}
                setGameList={setGameList}
                knownGameClues={knownGameClues}
                setKnownGameClues={setKnownGameClues}
                eventList={eventList}
                setEventList={setEventList}
                knownEventClues={knownEventClues}
                setKnownEventClues={setKnownEventClues}
                year={year}
                guess={guess}
                loaded={loaded}
                activeClue={activeClue}
                setActiveClue={setActiveClue}
            />
            <Clues knownMusicClues={knownMusicClues} knownMovieClues={knownMovieClues} knownGameClues={knownGameClues} knownEventClues={knownEventClues} activeClue={activeClue} setActiveClue={setActiveClue}/>
        </div>
    ) 
}
 
export default Game;