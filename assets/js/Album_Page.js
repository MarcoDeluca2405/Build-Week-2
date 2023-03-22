
Lista = document.getElementById('lista');

console.log(Lista);






async function fetchata(){
    const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/75621062')
    const oggetti = await response.json();

    console.log((oggetti.tracks).data)

    fillpage((oggetti.tracks).data)
}

fetchata();

function fillpage(cirio){
    

    for (let index = 0; index < cirio.length; index++) {
        
        titolo = cirio[index].title
        cica = Math.ceil(eval(cirio[index].duration)/60)
        cico = eval([index+1])

        Lista.innerHTML += `<div class="d-flex justify-content-between rounded hoveraggio" >
        <div class="d-flex"><span class="numberAlbum pt-2" >${cico}</span> &nbsp; &nbsp;<span class="row"><b>${titolo}</b> <span><a href="">${cirio[index].artist.name}m</a></span> </span> </div>  <div class="Minutaggio pt-2">${cica}</div>
     </div>`
        
    }
}




