import React, {useState} from 'react';
import Loader from 'react-loader-spinner';
import "./css/Input.css";
import jsonData from "./data/jsonData.json";

function Input(props) {
    const {musicList, setMusicList} = props;
    const {movieList, setMovieList} = props;
    const {gameList, setGameList} = props;
    const {eventList, setEventList} = props;
    const {loaded, setLoaded} = props;
    const {year, setYear} = props;
    const [input, setInput] = useState("");
    const [guess, setGuess] = useState("");
    const [loadingStatus, setLoadingStatus] = useState("");
    const [win, setWin] = useState(false);
    const years = [
        "1970",
        "1971",
        "1972",
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019"
      ];

    const getMusic = async(year, musicType) =>{
        const data = await jsonData[year].music;
        // console.log("MUSIC DATA");
        // console.log(data)
        return data;
    }

    const getMovies = async(year) =>{
        // console.log("Retrieving Movies...");
        const data = await jsonData[year].movies;
        return data;
    }

    const getGames = async(year) =>{
        // console.log("Retrieving Games...");
        const data = jsonData[year].games;
        return data;
    }

    const getEvents = async(year) =>{
        // console.log("Retrieving Events...");
        const data = await jsonData[year].events
        return data;
    }

    const populateMusic = async (year) =>{
        setLoadingStatus("Populating Music...");

        const filters = document.querySelector("input[name='music-type']:checked");
        const filter = filters.value;
        console.log("FILTER: " + filter);
        var data = localStorage.getItem("music_" + filter + "_" + year);

        if(data === null || data === ""){
            console.log("Data was null");
            data = await getMusic(year, filter);

            for(let i=0; i<data.length;i++){
                let song = data[i][0];
                let artist = data[i][1];
                let artistSong = artist + " - " + song;
                if(!musicList.includes(artistSong))
                    musicList.push(artistSong);
            }
            console.log("STATE: " + filter);
            localStorage.setItem("music_" + filter + "_" + year, musicList);
            setMusicList(musicList);
        }
        else{
            const arr = data.split(/(?=\S),(?=\S)/);
            setMusicList(arr);
        }

        if(data)
            return true;         
    };


    async function populateMovies(year){
        setLoadingStatus("Populating Movies...");

        var data = localStorage.getItem("movies_" + year);

        if(data === null || data === ""){
            data = await getMovies(year);
            for(let i=0; i<data.length;i++){
                let title = data[i];
                movieList.push(title);
            }
            localStorage.setItem("movies_" + year, movieList);
            setMovieList(movieList);
        }
        else{
            const arr = data.split(/(?=\S),(?=\S)/);
            setMovieList(arr);
        }

        if(data)
            return true;
    };

    async function populateGames(year){
        setLoadingStatus("Populating Games...");

        var data = localStorage.getItem("games_" + year);

        if(data === null || data === ""){
            data = await getGames(year);

            for(let i=0; i<data.length;i++){
                let title = data[i];
                gameList.push(title);
            }
            localStorage.setItem("games_" + year, gameList);
            setGameList(gameList);
        }
        else{
            const arr = data.split(/(?=\S),(?=\S)/);
            setGameList(arr);
        }

        if(data)
            return true;
    };   

    async function populateEvents(year){

        setLoadingStatus("Populating Events...");

        var data = localStorage.getItem("events_" + year);

        if(data === null || data === ""){
            data = await getEvents(year);

            for(let i=0; i<data.length;i++){
                let title = data[i];
                eventList.push(title);
            }
            localStorage.setItem("events_" + year, eventList);
            setEventList(eventList);
        }
        else{
            const arr = data.split(/(?=\S),(?=\S)/);
            setEventList(arr);
        }

        if(data)
            return true;
    };


    const randYearGen = () => {
        const rand = Math.floor(Math.random() * 51);
        console.log(years[rand]);
        return years[rand];
    }

    const handleListPopulation = async (year) => {

        let musicLoaded = false;
        let gamesLoaded = false;
        let moviesLoaded = false;
        let eventsLoaded = false;

        if(year === ""){
            year = randYearGen();
            setYear(year);
        }

        setLoaded(true);

        musicLoaded = await populateMusic(year); 
        moviesLoaded = await populateMovies(year);
        gamesLoaded = await populateGames(year);
        eventsLoaded = await populateEvents(year);

        if(musicLoaded && gamesLoaded && moviesLoaded && eventsLoaded){
            setLoaded(false);
            setLoadingStatus("");
        }

    }

    const processGuess = (guess, year) => {
        console.log("GUESS: " + guess);
        console.log("YEAR: " + year);
        if(guess === year){
            console.log("YOU WIN!");
            setWin(true);
        }
    }

    const handleYearSubmit = (e) =>{
        
        e.preventDefault();
        setYear(input);
        handleListPopulation(input);
        console.log(input);
        console.log(musicList);
    }

    return(
        <div>
            
            <div className="year-input">
                <input type="text" name="year" value={input} onChange={e => setInput(e.target.value)} placeholder="Year"></input>
                <button id="submit-button" onClick={handleYearSubmit}>Get Clues!</button>       
            </div>
            <br/>
            <div style={{textAlign:"center"}}>
                <input type="radio" id="" name="music-type" value="" defaultChecked/><label for="">All</label>
                <input type="radio" id="rock" name="music-type" value="rock" disabled/><label for="rock">Rock</label>
                <input type="radio" id="hard rock" name="music-type" value="hard rock" disabled/><label for="hard rock">Hard Rock</label>
                <input type="radio" id="pop" name="music-type" value="pop" disabled/><label for="pop">Pop</label>
                <input type="radio" id="metal" name="music-type" value="metal" disabled/><label for="metal">Metal</label>
            </div>
            {loaded === true ?
            <div className="loading-overlay">
                {loaded && <Loader type="TailSpin" color="#1D3557"/>}
                <div className="loading-status">{loadingStatus}</div>
            </div>: ""}
            {win === true ? <div className="win-banner">YOU WIN!</div> : ""}
            <div className="guess-input">
                <input type="text" name="guess" value={guess} onChange={e => setGuess(e.target.value)} placeholder="Guess"></input>
                <button id="guess-button" onClick={() => processGuess(guess, year)}>Submit</button>       
            </div>
        </div>
    ) 
}
 
export default Input;