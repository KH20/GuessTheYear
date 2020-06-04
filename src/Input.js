import React, {useState} from 'react';
import Loader from 'react-loader-spinner';
import "./css/Input.css";

function Input(props) {
    const {setYear, musicList, setMusicList} = props;
    const {movieList, setMovieList} = props;
    const {gameList, setGameList} = props;
    const {eventList, setEventList} = props;
    const {loaded, setLoaded} = props;
    const [input, setInput] = useState("");
    const [loadingStatus, setLoadingStatus] = useState("");
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
      ]

    const getMusic = async(year) =>{
        const musicYearUrl = "https://cors-anywhere.herokuapp.com/https://www.google.com/search?&origin=*&q=list+of+songs+";
        
        const musicUrl = musicYearUrl + year;
        // console.log("Retrieving Music...");
        const data = await fetch(musicUrl);
        return data.text();
    }

    const getMovies = async(year) =>{
        const movieYearUrl = "https://cors-anywhere.herokuapp.com/https://www.imdb.com/search/title/?year=" + year + "-01-01," + year + "-12-31&view=simple";
        const movieUrl = movieYearUrl;
        // console.log("Retrieving Movies...");
        const data = await fetch(movieUrl);
        return data.text();
    }

    const getGames = async(year) =>{
        const gameUrl = "https://cors-anywhere.herokuapp.com/https://www.imdb.com/search/title/?title_type=video_game&year=" + year + "-01-01," + year + "-12-31&view=simple";
        // console.log("Retrieving Games...");
        const data = await fetch(gameUrl);
        return data.text();
    }

    const getEvents = async(year) =>{
        const eventUrl = "https://cors-anywhere.herokuapp.com/https://www.onthisday.com/events/date/" + year;
        // console.log("Retrieving Events...");
        const data = await fetch(eventUrl);
        return data.text();
    }

    const populateMusic = async (year) =>{
        const parser = new DOMParser();
        setLoadingStatus("Populating Music...");
        const data = await getMusic(year);
        const htmldoc = parser.parseFromString(data,'text/html');
        const all = htmldoc.querySelectorAll(".rlc__slider-page div a .title, .rlc__slider-page div a span:nth-of-type(1)");
        for(let i=0; i<all.length/2;i+=2){
            let song = all[i]["innerText"];
            let artist = all[i+1]["innerText"];
            musicList.push(artist + " - " + song);
        }
        setMusicList(musicList);   
        if(data)
            return true;        
    };


    async function populateMovies(year){
        const parser = new DOMParser();
        setLoadingStatus("Populating Movies...");
        const data = await getMovies(year);
        console.log(data);
        var htmldoc = parser.parseFromString(data,'text/html');
        const all = htmldoc.querySelectorAll(".col-title span a");
        for(let i=1; i<all.length;i++){
            if(i > 50){
                break;
            }
            let col = all[i];
            var title = col["innerText"];
            movieList.push(title);
        }
        setMovieList(movieList);
        if(data)
            return true;
    };

    async function populateGames(year){
        const parser = new DOMParser();
        setLoadingStatus("Populating Games...");
        const data = await getGames(year);
        var htmldoc = parser.parseFromString(data,'text/html');
        const all = htmldoc.querySelectorAll(".col-title span a");

        for(let i=1; i<all.length;i++){
            if(i > 50){
                break;
            }
            let col = all[i];
            var title = col["innerText"];
            gameList.push(title);
        }
        setGameList(gameList);
        if(data)
            return true;
    };   

    async function populateEvents(year){
        const parser = new DOMParser();
        setLoadingStatus("Populating Events...");
        const data = await getEvents(year);
        var htmldoc = parser.parseFromString(data,'text/html');
        const all = htmldoc.querySelectorAll(".event, .section--highlight .wrapper .grid .grid__item p");
        for(let i=1; i<all.length;i++){
            let col = all[i];
            var title = col["innerText"];
            eventList.push(title);
        }
        setEventList(eventList);
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

    const handleYearSubmit = (e) =>{
        
        e.preventDefault();
        setYear(input);
        handleListPopulation(input);
        console.log(input);
        console.log(musicList);
    }

    return(
        <div>
            <div className="loading-overlay">
                {loaded && <Loader type="TailSpin" color="#1D3557"/>}
                <div className="loading-status">{loadingStatus}</div>
            </div>
            <div className="year-input">
                <input type="text" name="year" value={input} onChange={e => setInput(e.target.value)} placeholder="Year"></input>
                <button id="submit-button" onClick={handleYearSubmit}>Submit</button>   
            </div>
         
        </div>
    ) 
}
 
export default Input;