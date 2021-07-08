import React from 'react';
 
function Buttons(props) {
    const {knownMusicClues, setKnownMusicClues, musicList, setMusicList} = props;
    const {movieList, knownMovieClues, setKnownMovieClues, setMovieList} = props;
    const {gameList, knownGameClues, setKnownGameClues, setGameList} = props;
    const {eventList, knownEventClues, setKnownEventClues, setEventList} = props;
    const {year} = props;
    const {loaded} = props;
    const {setActiveClue} = props;

    const getSong = () => {
        console.log("GETTING SONG...")
        let rand = Math.floor(Math.random() * musicList.length);
        let song = musicList[rand];
        var newClues = [...knownMusicClues, song]
        setKnownMusicClues(newClues);
        var updatedList = [...musicList];
        updatedList.splice(rand,1);
        setMusicList(updatedList);
        setActiveClue(0);
    }

    const getMovie = () => {
        console.log("GETTING MOVIE...")
        let rand = Math.floor(Math.random() * movieList.length);
        let movie = movieList[rand];
        var newClues = [...knownMovieClues, movie]
        setKnownMovieClues(newClues);
        var updatedList = [...movieList];
        updatedList.splice(rand,1);
        setMovieList(updatedList);
        setActiveClue(1);
    }

    const getGame = () => {
        console.log("GETTING GAME...")
        let rand = Math.floor(Math.random() * gameList.length);
        let game = gameList[rand];
        var newClues = [...knownGameClues, game]
        setKnownGameClues(newClues);
        var updatedList = [...gameList];
        updatedList.splice(rand,1);
        setGameList(updatedList);
        setActiveClue(2);
    }

    const getEvent = () => {
        console.log("GETTING EVENT...")
        let rand = Math.floor(Math.random() * eventList.length);
        let event = eventList[rand];
        var newClues = [...knownEventClues, event]
        setKnownEventClues(newClues);
        var updatedList = [...eventList];
        updatedList.splice(rand,1);
        setEventList(updatedList);
        setActiveClue(3);
    }

    return(
        <div className="buttons-container">
            <button onClick={getSong} disabled={year === "" || loaded===true}>Get Song</button>
            <button onClick={getMovie} disabled={year === "" || loaded===true}>Get Movie</button>
            <button onClick={getGame} disabled={year === "" || loaded===true}>Get Game</button>
            <button onClick={getEvent} disabled={year === "" || loaded===true}>Get Event</button>
        </div>
    ) 
}
 
export default Buttons;