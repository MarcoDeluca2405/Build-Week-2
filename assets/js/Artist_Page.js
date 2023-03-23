let urlid = new URLSearchParams(window.location.search).get("id")
let urlprincipale = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
let refernzacarte = document.getElementById("card")
let referenzacarta = document.getElementById("cardgrande")
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



    refernzacarte.innerHTML += `   <div class="col me-5 mb-5 ">
   <div class="d-flex justify-content-between ">
     <div class="d-flex ms-4 align-items-top">
       <p>1</p>
         <img class="ms-4 me-2"src="${Scritta.album.cover_small}" width="30px" height="30px"  alt="">
   <p>${Scritta.title}</p>
     </div>
   
   <p>${Scritta.rank}</p>
   <p>${timing(Scritta.duration)} Min</p>
   </div>
   </div>` 

referenzacarta.innerHTML= ` <div class="border border-0 " style="width: 100%; height: 400px;">
           
            <img src="${Scritta.album.cover_big}" alt="" width="100%" height="100%" class="card-img">
         <div class="card-img-overlay d-flex flex-column justify-content-end  align-items-start ms-3">
            <h5 class="card-text">☑️Artista verificato</h5>
          <h1 class="card-text titolo">${Scritta.artist.name}</h1>
          <p class="card-text fs-5">${Scritta.rank} ascoltatori</p>
          </div>
        </div>
      </div> `
}
