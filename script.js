console.log("Welcome to Spotify");   

// Initialize the Variable
let songIndex =0;
let audioElement = new Audio('song/Bole chudiyan.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs =[
    {SongName:"Bole chudiyan", filePath:"song/Bole chudiyan.mp3", coverPath:"covers/Bole chudiyan.jpg"},
    {SongName:"Dholna", filePath:"song/2.mp3", coverPath:"covers/2.jpg"},
    {SongName:"Dil To Pagal Hai", filePath:"song/Dil To Pagal Hai.mp3", coverPath:"covers/Dil To Pagal Hai.jpg"},
    {SongName:"Kuch Kuch Hota Hai", filePath:"song/Kuch Kuch Hota Hai.mp3", coverPath:"covers/Kuch Kuch Hota Hai.jpg"},
    {SongName:"Suraj Hua Maddham", filePath:"song/Suraj Hua Maddham.mp3", coverPath:"covers/Suraj Hua Maddham.jpg"},
    {SongName:"Yeh Ladka Hai Allah", filePath:"song/Yeh Ladka Hai Allah.mp3", coverPath:"covers/Yeh Ladka Hai Allah.jpg"},
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play'); 
        gif.style.opacity = 0 ;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
 //update seekbar 
 progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 myProgressBar.value = progress;

}) 
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}) 

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ 
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ 
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })  
})