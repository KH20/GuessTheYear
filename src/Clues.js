import React from 'react';
import "../src/css/Clues.css"; 
import Clue from "./Clue.js";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'



function Clues(props) {
   
    const {knownMusicClues, knownMovieClues, knownGameClues, knownEventClues} = props;
    console.log("CLUES COMPONENT LOADED");
    return(
        <div className="clues">
            <Carousel>
            <div className="music">
                <h2 id="music-header" class="section-header">Music Clues</h2>
                <div className="music-clues-container">
                    {/* <ol>                    
                        {knownMusicClues.map((clue, index) => (
                            <a href={"http://www.google.com/search?q=" + clue + " youtube&btnI"} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                        ))}
                    </ol> */}
                    {knownMusicClues.map((clue, index) => (
                        <Clue artist={clue.artist} type="Music" title={clue.title} key={index}></Clue>
                    ))}
                    
                </div>
            </div>

            <div className="movies">
                <h2 id="movie-header" class="section-header">Movie / TV Clues</h2>
                <div className="movie-clues-container">
                    {/* <ol>                    
                        {knownMovieClues.map((clue, index) => (
                            <a href={"http://www.google.com/search?q=" + clue + " IMDB&btnI"} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                        ))}
                    </ol> */}
                    {knownMovieClues.map((clue, index) => (
                        <Clue title={clue} type="Movie" key={index}></Clue>
                    ))}
                </div>
            </div>

            <div className="games">
                <h2 id="game-header" class="section-header">Game Clues</h2>
                <div className="game-clues-container">
                    {/* <ol>                    
                        {knownGameClues.map((clue, index) => (
                            <a href={"http://www.google.com/search?q=" + clue + " Game&btnI"} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                        ))}
                    </ol> */}
                    {knownGameClues.map((clue, index) => (
                        <Clue title={clue} type="Game" key={index}></Clue>
                    ))}
                </div>
            </div>

            <div className="events">
                <h2 id="event-header" class="section-header">Event Clues</h2>
                <div className="event-clues-container">
                    {/* <ol>                    
                        {knownEventClues.map((clue, index) => (
                            <a href={"http://www.google.com/search?q=" + clue} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                        ))}
                    </ol> */}
                    {knownEventClues.map((clue, index) => (
                        <Clue title={clue} type="Event" key={index}></Clue>
                    ))}
                </div>
            </div>
            </Carousel>

        </div>
    ) 
}
 
export default Clues;