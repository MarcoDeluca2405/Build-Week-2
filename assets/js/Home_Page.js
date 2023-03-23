let progressbar = document.getElementById("audio")
let play = document.getElementById("play")
let song=document.getElementById("museca")
function audio (){
    progressbar.max = song.duration;
    progressbar.value=song.currentTime;
}

function playpause(){
    if (play.classList.contains("bi-pause-fill")){
        play.classList.remove("bi-pause-fill")
        play.classList.add("bi-play-circle-fill")
    }
else{
 play.classList.remove("bi-play-circle-fill")
    play.classList.add("bi-pause-fill")
    
}
}

play.addEventListener("click",playpause)


function musica (){
song.innerHTML= `<source src="" type=""> `
}