import React, {useState} from 'react';

function Input(props) {
    const {setYear, musicList, setMusicList} = props;
    const {movieList, setMovieList} = props;
    const {gameList, setGameList} = props;
    const {eventList, setEventList} = props;
    const [input, setInput] = useState("");
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

    const handleYearSubmit = (e) =>{
        e.preventDefault();
        setYear(input);
        handleListPopulation(input);
        console.log(input);
        console.log(musicList);
    }

    const randYearGen = () => {
        const rand = Math.floor(Math.random() * 51);
        console.log(years[rand]);
        return years[rand];
    }

    const populateMusic = (year) => {
        let musicYearUrl = "";
        let intyear = parseInt(year);
        if(intyear > 1958){
            musicYearUrl = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&disabletoc=1&origin=*&page=Billboard_Year-End_Hot_100_singles_of_";
        }
        else{
            musicYearUrl = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&disabletoc=1&origin=*&page=Billboard_year-end_top_50_singles_of_"
        }
         
        const musicUrl = musicYearUrl + year;
        console.log(musicUrl);
        const parser = new DOMParser();
        console.log("Populating music...")

        var htmldoc;
        fetch(musicUrl).then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status + ". SONGS");
                    return;
                }
                response.json().then(function(data) {
                    console.log(data['parse']["text"]["*"]);
                    htmldoc = parser.parseFromString(data['parse']["text"]["*"],'text/html');
                    const all = htmldoc.querySelectorAll(".wikitable tbody tr");
                    console.log("-------------------")
                    console.log(all);
                    for(let i=1; i<50;i++){
                        let songInfo = all[i]["cells"];
                        var song = "";
                        var artist = "";
                        if(songInfo.length<3){
                            song = songInfo[0]["innerText"];
                            artist = songInfo[1]["innerText"];
                        }else{
                            song = songInfo[1]["innerText"];
                            artist = songInfo[2]["innerText"];
                        }

                        musicList.push(artist + " - " + song);
                    }
                    setMusicList(musicList);           
                });
            }
        )
    }

    const populateMovies = (year) => {
        // const movieYearUrl = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=2&disabletoc=1&origin=*&page="
        // const movieUrl = movieYearUrl + year + "_in_film";
        // console.log(movieUrl);
        const movieYearUrl = "https://cors-anywhere.herokuapp.com/https://www.boxofficemojo.com/year/world/";
        const movieUrl = movieYearUrl + year;

        const parser = new DOMParser();
        // console.log("Populating movies...")

        var htmldoc;
        fetch(movieUrl).then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status + ". MOVIES");
                    return;
                }
                response.text().then(function(data) {
                    // console.log(data);
                    // console.log(data['parse']["text"]["*"]);
                    htmldoc = parser.parseFromString(data,'text/html');
                    // htmldoc = parser.parseFromString(data['parse']["text"]["*"],'text/html');
                    const all = htmldoc.querySelectorAll(".mojo-body-table tr");
                    console.log(all);
                    for(let i=1; i<50;i++){
                        let movieInfo = all[i]["cells"];
                        var title = movieInfo[1]["innerText"];
                        movieList.push(title);
                    }
                    setMovieList(movieList);
                });
            }
        )
    }

    const populateGames = (year) => {

        const gameUrl = "https://cors-anywhere.herokuapp.com/https://www.imdb.com/search/title/?title_type=video_game&year=" + year + "-01-01," + year + "-12-31&view=simple";

        const parser = new DOMParser();
        // console.log("Populating movies...")

        var htmldoc;
        fetch(gameUrl).then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status + ". GAMES");
                    return;
                }
                response.text().then(function(data) {
                    htmldoc = parser.parseFromString(data,'text/html');

                    const all = htmldoc.querySelectorAll(".col-title span a");
                    console.log(all);
                    for(let i=1; i<all.length;i++){
                        if(i > 50){
                            break;
                        }
                        let col = all[i];
                        var title = col["innerText"];
                        gameList.push(title);
                    }
                    setGameList(gameList);

                });
            }
        )
    }

    const populateEvents = (year) => {

        const eventUrl = "https://cors-anywhere.herokuapp.com/https://www.onthisday.com/events/date/" + year;

        const parser = new DOMParser();
        // console.log("Populating movies...")

        var htmldoc;
        fetch(eventUrl).then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status + ". EVENTS");
                    return;
                }
                response.text().then(function(data) {
                    htmldoc = parser.parseFromString(data,'text/html');

                    const all = htmldoc.querySelectorAll(".event, .section--highlight .wrapper .grid .grid__item p");
                    console.log("EVENTS");
                    console.log(all);
                    for(let i=1; i<all.length;i++){
                        let col = all[i];
                        
                        var title = col["innerText"];
                        eventList.push(title);
                    }
                    setEventList(eventList);

                });
            }
        )
    }

    const handleListPopulation = (year) => {

        if(year === ""){
            year = randYearGen();
            setYear(year);
        }

        populateMusic(year); 
        populateMovies(year);
        populateGames(year);
        populateEvents(year);
    }


    return(
        <div>
            Year: 
            <input type="text" name="year" value={input} onChange={e => setInput(e.target.value)}></input>
            <button onClick={handleYearSubmit}>Submit</button>
        </div>
    ) 
}
 
export default Input;