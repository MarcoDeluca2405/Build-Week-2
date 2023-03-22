
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

        Lista.innerHTML += `<div class="d-flex justify-content-between rounded hoverAlbum" id="elementlist" onmouseover=hoverh(${[index]}) onmouseout=hoverh(${[index]})>
        <div class="d-flex"><span class="numberAlbum pt-2" >${cico}</span> &nbsp; &nbsp;<span class="row"><b>${titolo}</b> <span><a href="">${cirio[index].artist.name}</a></span> </span> </div> 
                <div  class="d-flex"> <div id="cuoricino${index}" class="me-3 pt-2 d-none"> 
                    <i id="cuorepieno${index}" onclick=riempi(${index}) class="bi bi-heart"></i> 
                            
                             </div>
                                <div id="cuoreNO${index}" onclick=riempi(${index}) class="d-none me-3 pt-2 "><i class="bi bi-heart-fill"></i> </div>
                             
                             <div class="Minutaggio pt-2">${cica}m</div>
        
        </div>
     </div>`
        
    }
}

function riempi(par) {
    let cuorep = document.getElementById(`cuorepieno${par}`);
    let cuoreN = document.getElementById(`cuoricino${par}`);
    let cuoreno = document.getElementById(`cuoreNO${par}`)
    cuorep.classList.toggle('bi-heart');
    cuoreN.classList.toggle('d-none');
    cuoreno.classList.toggle('d-none');
    
}

function hoverh(par) {
    let cuore = document.getElementById(`cuoricino${par}`);
       cuore.classList.toggle('d-none');
}


