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
                    <div className="music-clues">
                        <ol>                    
                            {knownMusicClues.map((clue, index) => (
                                <a href={"http://www.google.com/search?q=" + clue + " youtube&btnI"} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            <div className="movies">
                <h2 id="movie-header">Movie Clues</h2>
                <div className="movie-clues-container">
                    <div className="movie-clues">
                        <ol>                    
                            {knownMovieClues.map((clue, index) => (
                                <a href={"http://www.google.com/search?q=" + clue + " IMDB&btnI"} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            <div className="games">
                <h2 id="game-header">Game Clues</h2>
                <div className="game-clues-container">
                    <div className="game-clues">
                        <ol>                    
                            {knownGameClues.map((clue, index) => (
                                <a href={"http://www.google.com/search?q=" + clue + " Game&btnI"} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            <div className="events">
                <h2 id="event-header">Event Clues</h2>
                <div className="event-clues-container">
                    <div className="event-clues">
                        <ol>                    
                            {knownEventClues.map((clue, index) => (
                                <a href={"http://www.google.com/search?q=" + clue} target="new"><div className="clue"><li key={index}>{clue}</li></div></a>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
 
export default Clues;