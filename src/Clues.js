import React from 'react';
import "../src/css/Clues.css"; 

function Clues(props) {
    const {knownMusicClues, knownMovieClues, knownGameClues, knownEventClues} = props;
    console.log("CLUES COMPONENT LOADED");
    return(
        <div className="clues">
            <div className="music">
                <h2 id="music-header">Music Clues</h2>
                <div className="music-clues-container">
                    <ol>                    
                        {knownMusicClues.map((clue, index) => (
                            <a href={"http://www.google.com/search?q=" + clue + " youtube&btnI"} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                        ))}
                    </ol>
                </div>
            </div>

            <div className="movies">
                <h2 id="movie-header">Movie / TV Clues</h2>
                <div className="movie-clues-container">
                    <ol>                    
                        {knownMovieClues.map((clue, index) => (
                            <a href={"http://www.google.com/search?q=" + clue + " IMDB&btnI"} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                        ))}
                    </ol>
                </div>
            </div>

            <div className="games">
                <h2 id="game-header">Game Clues</h2>
                <div className="game-clues-container">
                    <ol>                    
                        {knownGameClues.map((clue, index) => (
                            <a href={"http://www.google.com/search?q=" + clue + " Game&btnI"} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                        ))}
                    </ol>
                </div>
            </div>

            <div className="events">
                <h2 id="event-header">Event Clues</h2>
                <div className="event-clues-container">
                    <ol>                    
                        {knownEventClues.map((clue, index) => (
                            <a href={"http://www.google.com/search?q=" + clue} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    ) 
}
 
export default Clues;