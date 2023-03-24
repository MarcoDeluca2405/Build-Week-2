let urlid = new URLSearchParams(window.location.search).get("id")
let urlprincipale = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
let refernzacarte = document.getElementById("card")
let referenzacarta = document.getElementById("cardgrande")
let divReference=document.getElementById('braniPiaciuti');
let mobileCardReference=document.getElementById('artistCardContainer')
let i=0;

const cercaALBUM =async ()=>{
    let responsive = await fetch(urlprincipale+urlid)
    let risposta = await responsive.json();
  let conferma=await risposta;
  
    console.log(conferma.tracklist);
    let getalbum=await conferma.tracklist;
    album(getalbum);
  
}


const album= async (getalbum) =>{
  let responsive = await fetch(getalbum);
  let risposta = await responsive.json();
  let getData=await risposta.data;
  console.log(getData);
  getData.forEach(element => {
    scrivi(element);
  });
}


cercaALBUM()



  function timing(duration) {
    const slots = []
    duration = Math.ceil(duration)
    while (duration > 59 && slots.length < 2) {
       slots.push( (duration % 60).toString().padStart(2, '0'))
       duration = Math.floor(duration / 60)
   }
   if( duration > 0 ) slots.push(duration);
   return slots.reverse().join(':')
}


 
 function scrivi (Scritta){
  console.log(Scritta);
  i++;
  
  divReference.innerHTML=`
  <div class=" mb-4 mt-4 hi2">
                <div> <img src="${Scritta.album.cover_small}">
                <i class="bi bi-heart-fill cuoreMiPiace"></i>
                </div>
                <div>
                <p class="mb-0 ms-3">Brani che ti piacciono</p> 
                <p class="mb-0 ms-3 sottoP grayColor">8 brani di ${Scritta.artist.name}</p>
            </div>
  `;

  mobileCardReference.innerHTML+=`
<div class="artistCard">
  <div class="sottoArtistCard">
        <div>${i}</div>
        <img class="ms-3 me-2"src="${Scritta.album.cover_small}" width="45px" height="45px"  alt="">
        <div>
            <p class="mb-0">${Scritta.title}</p>
            <p class="mb-0 grayColor">10.679.900</p>
        </div>
    </div>
    <div>
        <i class="bi bi-three-dots-vertical"></i>
    </div>
    </div>

  `;


    refernzacarte.innerHTML += `   <div class="col me-5 mb-5 artistaV">
   <div class="d-flex justify-content-between ">
     <div class="d-flex ms-4 align-items-top">
       <p>${i}</p>
         <img class="ms-4 me-2"src="${Scritta.album.cover_small}" width="30px" height="30px"  alt="">
   <p>${Scritta.title}</p>
     </div>
   
   <p>${Scritta.rank}</p>
   <p>${timing(Scritta.duration)} Min</p>
   </div>
   </div>` 

referenzacarta.innerHTML= ` <div class="border border-0 immagine">
<div id="ciao" ><i  class="bi bi-arrow-left-circle"></i></div>
            <img src="${Scritta.album.cover_big}" alt="" width="100%" height="100%" class="card-img">
         <div class="card-img-overlay d-flex flex-column justify-content-end  align-items-start ms-3">
            <h5 class="card-text artistaV">☑️Artista verificato</h5>
          <h1 class="card-text titolo">${Scritta.artist.name}</h1>
          <p class="card-text fs-5 artistaV">${Scritta.rank} ascoltatori</p>
          </div>
        </div>
      </div> `
}

