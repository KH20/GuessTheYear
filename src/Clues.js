import React from 'react';
import "../src/css/Clues.css"; 
import Clue from "./Clue.js";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




function Clues(props) {
   
    const {knownMusicClues, knownMovieClues, knownGameClues, knownEventClues} = props;
    const {activeClue} = props;
    return(
        <div className="clues">
            <Carousel swipeable={true} emulateTouch={true} autoPlay={false} showStatus={false} interval={9999999999} useKeyboardArrows={true} autoFocus={true} selectedItem={activeClue}>
                <div className="music">
                    <h2 id="music-header" class="section-header">Music Clues</h2>
                    <div className="music-clues-container">
                        {knownMusicClues.map((clue, index) => (
                            <Clue artist={clue.artist} type="Music" title={clue.title} key={index}></Clue>
                        ))}
                    </div>
                </div>

                <div className="movies">
                    <h2 id="movie-header" class="section-header">Movie / TV Clues</h2>
                    <div className="movie-clues-container">
                        {knownMovieClues.map((clue, index) => (
                            <Clue title={clue} type="Movie" key={index}></Clue>
                        ))}
                    </div>
                </div>

                <div className="games">
                    <h2 id="game-header" class="section-header">Game Clues</h2>
                    <div className="game-clues-container">
                        {knownGameClues.map((clue, index) => (
                            <Clue title={clue} type="Game" key={index}></Clue>
                        ))}
                    </div>
                </div>

                <div className="events">
                    <h2 id="event-header" class="section-header">Event Clues</h2>
                    <div className="event-clues-container">
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