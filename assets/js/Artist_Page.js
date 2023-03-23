let urlid = new URLSearchParams(window.location.search).get("id")
let urlprincipale = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
let refernzacarte = document.getElementById("card")

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
function scrivi (Scritta){
    refernzacarte.innerHTML += `   <div class="col me-5 mb-5 ">
   <div class="d-flex justify-content-between ">
     <div class="d-flex ms-4 align-items-top">
       <p>1</p>
         <img class="ms-4 me-2"src="${Scritta.album.cover_small}" width="30px" height="30px"  alt="">
   <p>${Scritta.title}</p>
     </div>
   
   <p>${Scritta.rank}</p>
   <p>${Scritta.duration}s</p>
   </div>
   </div>` 
}