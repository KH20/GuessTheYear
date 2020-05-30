import React from 'react';
 
function Buttons() {
    var musicList = []
    var url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=20&disabletoc=1&origin=*&"

    const getSong = () => {
        console.log("GETTING SONG...")
        var musicUrl = url + "page=2004_in_music";
        
        var parser = new DOMParser();
        var htmldoc
        fetch(musicUrl).then(
            function(response) {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
        
              // Examine the text in the response
              response.json().then(function(data) {
                console.log(data['parse']["text"]["*"]);
                htmldoc = parser.parseFromString(data['parse']["text"]["*"],'text/html');
                var all = htmldoc.querySelectorAll("li");
                for(let i=0; i<all.length;i++){
                    musicList.push(all[i]["innerText"]);
                }
                console.log(musicList);
                let rand = Math.floor(Math.random() * musicList.length);
                console.log(musicList[rand]);
                
              });
            }
        )

          
    }

    const getMovie = () => {
        console.log("GETTING MOVIE...")
    }

    const getGame = () => {
        console.log("GETTING GAME...")
    }

    const getEvent = () => {
        console.log("GETTING EVENT...")
    }

    return(
        <div>
            <button onClick={getSong}>Get Song</button>
            <button onClick={getMovie}>Get Movie</button>
            <button onClick={getGame}>Get Game</button>
            <button onClick={getEvent}>Get Event</button>
        </div>
    ) 
}
 
export default Buttons;