

    getDominantImageColor = ()=>{
        // get the image
        let sourceImage = document.querySelector("immagineAlbum");
        // get the background element
        console.log(sourceImage)
        let background = document.querySelector("#due");
        // initialize colorThief
        let colorThief = new ColorThief();
        // get color palette
        let color = colorThief.getColor(sourceImage);
        // set the background color
        background.getElementsByClassName.backgroundcolor = "rgb(" + color + ")";
    }
    
    




Lista = document.getElementById('lista');
let ID = new URLSearchParams(window.location.search).get('id');
console.log(ID)

console.log(Lista);

urlprova = "https://striveschool-api.herokuapp.com/api/deezer/artist/412"









async function fetchata(){
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${ID}`)
    const oggetti = await response.json();
    console.log(oggetti)
    console.log((oggetti.tracks).data)
    console.log(oggetti.title)

    Controllo((oggetti.artist).name)
    fillpage((oggetti.tracks).data)
    document.getElementById('immagineAlbum').innerHTML = `<img src="${oggetti.cover_big}" id=bigCover" class="img-fluid my-3 mx-3 image_t" alt="..."></img>`
    fillpage2((oggetti))
    getDominantImageColor();
}

console.log()
  



function fillpage2(params) {
    titolo = params.title;
    console.log('titolo', titolo)
    document.getElementById('titotloAlbum').innerHTML = titolo;
    document.getElementById('autoreAlbum').innerHTML =`<a href="Artist_Page.html?id=${params.artist.id}">${params.artist.name}</a>`;
}




fetchata();

function fillpage(cirio){
    

    for (let index = 0; index < cirio.length; index++) {
        
        titolo = cirio[index].title
        cica = Math.ceil(eval(cirio[index].duration)/60)
        cico = eval([index+1])

        Lista.innerHTML += `<div class="d-flex justify-content-between rounded hoverAlbum" id="elementlist" onmouseover=hoverh(${[index]}) onmouseout=hoverh(${[index]})>
        <div class="d-flex"><span class="numberAlbum pt-2 my-3" >${cico}</span> &nbsp; &nbsp;<span class="row"><b>${titolo}</b> <span><a style="text-decoration:none;" href="Artist_Page.html?id=${cirio[index].artist.id}">${cirio[index].artist.name}</a></span> </span> </div> 
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

async function Controllo(params) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${params}`)
    const oggetto = await response.json();
    const oggettovero =   oggetto.data;
     console.log(oggettovero)

     function randomizer(){
       numerorand = Math.floor(Math.random() * oggettovero.length)
       console.log(numerorand)
       return numerorand
     }

     for (let index = 0; index < 6; index++) {
        
        console.log(index)
        document.getElementById('altriAlbum').innerHTML += 
        `
         
        <a href="Album_Page.html?id=${(oggettovero[index].album).id}" class="card cartecanz hoveraggio col-2 my-2" style="width: 12rem;">
               <img src="${(oggettovero[index].album).cover}" class="card-img-top mt-2 " alt="...">
               <div class="card-body">
                  <p class="card-text"><b class="d-block">${(oggettovero[index].title_short)}</b> </p>
               </div>
            </a> 
     `;
        
     }
    
   
}


