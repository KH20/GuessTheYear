import React from 'react';
import "../src/css/Clues.css"; 

function Clues(props) {
    const {knownMusicClues, knownMovieClues, knownGameClues, knownEventClues} = props;
    console.log("CLUES COMPONENT LOADED");

    return(
        <div className="clues">
            <div className="music">
                <h2>Music Clues</h2>
                <ol>                    
                    {knownMusicClues.map((clue, index) => (
                        <li key={index}>{clue}</li>
                    ))}
                </ol>
            </div>

            <div className="movies">
                <h2>Movie Clues</h2>
                <ol>                    
                    {knownMovieClues.map((clue, index) => (
                        <li key={index}>{clue}</li>
                    ))}
                </ol>
            </div>

            <div className="games">
                <h2>Game Clues</h2>
                <ol> 
                    {knownGameClues.map((clue, index) => (
                        <li key={index}>{clue}</li>
                    ))}
                </ol>
            </div>

            <div className="events">
                <h2>Event Clues</h2>
                <ol>
                    {knownEventClues.map((clue, index) => (
                        <li key={index}>{clue}</li>
                    ))}
                </ol>
            </div>
        </div>
    ) 
}
 
export default Clues;