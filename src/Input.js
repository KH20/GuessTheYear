import React, {useState} from 'react';
import Loader from 'react-loader-spinner';
import Modal from "./Modal.js";
import Button from '@material-ui/core/Button';
import "./css/Input.css";
import "./css/style.css";
import jsonData from "./data/jsonData.json";
import AWN from "awesome-notifications";
import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css';

let globalOptions =  {
    durations:{
        global: 2000,
    },
    position:"top-right",
    labels:{
        alert: "Incorrect"
    }
};  

let inputErr =  {
    durations:{
        global: 4000,
    },
    position:"top-right",
    labels:{
        alert: "Error"
    }
};

let notifier = new AWN(globalOptions)
let inputNotifier = new AWN(inputErr)


function Input(props) {
    const {musicList, setMusicList} = props;
    const {movieList, setMovieList} = props;
    const {gameList, setGameList} = props;
    const {eventList, setEventList} = props;
    const {loaded, setLoaded} = props;
    const {year, setYear} = props;
    const [input, setInput] = useState("");
    const [guess, setGuess] = useState("");
    const [giveUp, setGiveUp] = useState(false);
    const [disable, setDisable] = useState(false);
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
      const [minimumYear, setMinimumYear] = useState(years[0]);
      const [maximumYear, setMaximumYear] = useState(years[years.length - 1]);
    

    const getMusic = async(year) =>{
        const data = await jsonData[year].music;
        return data;
    }

    const getMovies = async(year) =>{
        const data = await jsonData[year].movies;
        return data;
    }

    const getGames = async(year) =>{
        const data = jsonData[year].games;
        return data;
    }

    const getEvents = async(year) =>{
        const data = await jsonData[year].events
        return data;
    }

    const populateMusic = async (year) =>{
        setLoadingStatus("Populating Music...");

        var data = localStorage.getItem("music_" + year);

        if(data === null || data === ""){
            console.log("Data was null");
            data = await getMusic(year);

            for(let i=0; i<data.length;i++){
                let song = data[i][0];
                let artist = data[i][1];
                // let artistSong = artist + " - " + song;
                let musicClue = {"artist":artist, "title":song}
                musicList.push(musicClue);
            }
            // localStorage.setItem("music_" + filter + "_" + year, musicList);
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
            // localStorage.setItem("movies_" + year, movieList);
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
            // localStorage.setItem("games_" + year, gameList);
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
            // localStorage.setItem("events_" + year, eventList);
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
        let rand = 0;
        let minYear = years.indexOf(minimumYear);
        let maxYear = years.indexOf(maximumYear);
        rand = Math.floor(Math.random() * (maxYear - minYear) + minYear) + 1;
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

    const processGuessSubmit = (guess, year) => {

        if(years.indexOf(guess) < 0){
            inputNotifier.alert("Input must be a valid year in the format XXXX e.g. 1999 between 1970-2020");
            return;
        }

        if(guess === year){
            setWin(true);
            setDisable(true);
        }
        else{
            notifier.alert(":(");
        }
    }

    const processGiveUp = () => {
        setGiveUp(true);
        setDisable(true);

    }

    const handleYearSubmit = (e) =>{
        
        e.preventDefault();

        if(years.indexOf(input) < 0 && input !== ""){
            inputNotifier.alert("Input must be a valid year in the format XXXX e.g. 1999 between 1970-2020 or blank");
            return;
        }

        setYear(input);
        handleListPopulation(input);

    }

    const handleGuessInput = (e) => {
        if(!checkInputIsNumber(e)){
            return;
        }

        setGuess(e.target.value);
    }

    const playAgain = () => {
        window.location.reload(true);
    }

    const close = () => {
        setWin(false);
        setGiveUp(false);
    }

    const showYearInputToolTip = () => {
        tippy('.year-input-content', {
            content: "Leave the year blank for Single Player Mode",
            hideOnClick: false,
            duration:[100,250],
            trigger: "mouseenter"
        });
    }

    const showGuessInputTooltip = () => {
        tippy('.guess-input-content', {
            content: "Input your guess here",
            hideOnClick: false,
            duration:[100,250],
            trigger: "mouseenter",
            placement: "bottom"
        });
    }

    const checkInputIsNumber = (e) => {
        //Check if last entered key is not a number.
        //Guards against index reference error when backspace is entered
        //Stops user entering letters
        const len = e.target.value.length;
        if(!isNaN(e.target.value.charCodeAt(0))){
            if(e.target.value[len-1].charCodeAt(0) < 48 || e.target.value[len-1].charCodeAt(0) > 57){
                inputNotifier.alert("Input must be a valid year in the format XXXX e.g. 1999");
                return false;
            }
        }
        return true;
    }

    const handleYearInput = (e) => {

        if(!checkInputIsNumber(e)){
            return;
        }

        setInput(e.target.value)
    }

    return(
        <div>
            <Modal minimumYear={minimumYear} setMinimumYear={setMinimumYear} maximumYear={maximumYear} setMaximumYear={setMaximumYear}></Modal>
            <div className="year-input">
                <div className="year-input-content" onMouseEnter={showYearInputToolTip}>
                    <input type="number" name="year" value={input} onChange={e => handleYearInput(e)} placeholder="Year" ></input> 
                </div>
                <Button variant="contained" color="primary" id="submit-button" onClick={handleYearSubmit} disabled={year !== "" && loaded!==true}>Get Clues!</Button> 
            </div>
            <br/>

            {loaded === true ?
            <div className="loading-overlay">
                {loaded && <Loader type="TailSpin" color="#1D3557"/>}
                <div className="loading-status">{loadingStatus}</div>
            </div>: ""}
            {win === true ? <div className="win-banner">YOU WIN!<p><button onClick={playAgain}>Play Again</button><button onClick={close}>Close</button></p></div> : ""}
            {giveUp === true ? <div className="giveup-banner">The Year was: {year}<p><button onClick={playAgain}>Play Again</button><button onClick={close}>Close</button></p></div> : ""}
            <div className="guess-input">
                <div className="guess-input-content" onMouseEnter={showGuessInputTooltip}>
                    <input type="number" name="guess" value={guess} onChange={e => handleGuessInput(e)} placeholder="Guess"></input>    
                </div>
                <Button variant="contained" color="primary" id="guess-button" onClick={() => processGuessSubmit(guess, year)} disabled={(year === "" || loaded===true) || disable===true}>Submit</Button>
                <Button variant="contained" color="primary" id="giveup-button" onClick={() => processGiveUp()} disabled={(year === "" || loaded===true) || disable===true}>Give Up</Button> 
            </div>
        </div>
    ) 
}
 
export default Input;