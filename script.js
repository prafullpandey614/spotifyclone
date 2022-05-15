console.log("Welcome to Spotif- The real Music");
//Initializing elements
let audioElement = new Audio("/songs/2.mp3");
let currSong = document.getElementById("currSong");
let index = 0;
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Insane Ap DHillon", filePath:"/spotifyclone/songs/2.mp3" , coverPath:"/covers/2.jpg"},
    {songName: "2- Bhai Kambi ", filePath:"/spotifyclone/songs/3.mp3" , coverPath:"/covers/3.jpg"},
    {songName: "Lollipop- Pawan Singh ", filePath:"/spotifyclone/songs/4.mp3" , coverPath:"/covers/4.jpg"},
    {songName: "Hello- Prince Narula ", filePath:"/spotifyclone/songs/5.mp3" , coverPath:"/covers/5.jpg"},
    {songName: "Every Day Guy - 2", filePath:"/spotifyclone/songs/6.mp3" , coverPath:"/covers/6.jpg"},
    {songName: "Saans - Kambi ", filePath:"/spotifyclone/songs/7.mp3" , coverPath:"/covers/7.jpg"},
    // {songName: "8", filePath:"spotifyclone/songs/8.mp3" , coverPath:"/covers/8.jpg"},
    // {songName: "9", filePath:"spotifyclone/songs/9.mp3" , coverPath:"/covers/9.jpg"},
    // {songName: "10", filePath:"spotifyclone/songs/10.mp3" , coverPath:"/covers/10.jpg"},
    {songName: "Kudiyan Lahore - Hardy", filePath:"/spotifyclone/songs/1.mp3" , coverPath:"/covers/1.jpg"},
]
// audioElement.play();
songItems.forEach((element, i)=>{
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByTagName('span')[0].innerHTML = songs[i].songName;
})
//Adding EventListeners
masterPlay.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById("gif").style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        document.getElementById("gif").style.opacity=0;

    }

})
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
   let timve = parseInt(myprogressbar.value*audioElement.duration)/100;
   audioElement.currentTime = timve;
})
//make all buttons play function
const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('chotuplay')).forEach((element)=>{
   
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    console.log('here also')
})
}
Array.from(document.getElementsByClassName('chotuplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index = parseInt(e.target.id) ;
        
        makeAllPlays();
        
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        console.log("clicked");
        audioElement.src = `/spotifyclone/songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        currSong.innerText = songs[index-1].songName;
        document.getElementById("gif").style.opacity=1;


    })

})
document.getElementById('backward').addEventListener('click',()=>{
     if(index>1){
         index = index-1;

     }
     else {
         index=7;
     }
     audioElement.src = `/songs/${index}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
     currSong.innerText = songs[index-1].songName;

})
document.getElementById('forward').addEventListener('click',()=>{
    if(index==7){
        index = 1;

    }
    else {
        index=index+1;
    }
    audioElement.src = `/spotifyclone/songs/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    currSong.innerText = songs[index-1].songName;

})
