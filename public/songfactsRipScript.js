
var pageElementCount = document.getElementsByClassName("firstten");
var url = window.location.href;
var pageCount = pageElementCount[2].innerText;
pageCount = parseInt(pageCount);

var songsElements = document.querySelectorAll(".browse-list-dark.space-bot li");
var songs = [];
var page = 1;
sessionStorage.setItem("page", 1);
while(page < pageCount){
    for(let i=0;i<songsElements.length;i++){
        let arr = [];
          arr.push(songsElements[i].lastElementChild.innerText);
          arr.push(songsElements[i].lastChild.data.slice(3));
          songs.push(arr);
    }
    sessionStorage.setItem("page" + page, JSON.stringify(songs));
    songs = [];
    page++;
    sessionStorage.setItem("page", page);
    url = window.location.href + "/page" + page;
    window.location.replace(url);
}



