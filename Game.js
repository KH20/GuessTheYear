import React, {useState} from 'react';
import Input from "./Input";
import Buttons from './Buttons';
import Clues from './Clues';
import "./css/Buttons.css";



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
    return(
        <div>
            <Input 
                year={year} 
                setYear={setYear} 
                musicList={musicList} 
                setMusicList={setMusicList} 
                movieList={movieList} 
                setMovieList={setMovieList} 
                gameList={gameList} 
                setGameList={setGameList}
                eventList={eventList}
                setEventList={setEventList}
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
            />
            <Clues knownMusicClues={knownMusicClues} knownMovieClues={knownMovieClues} knownGameClues={knownGameClues} knownEventClues={knownEventClues}/>
        </div>
    ) 
}
 
export default Game;