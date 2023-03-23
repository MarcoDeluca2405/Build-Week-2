let urlid = new URLSearchParams(window.location.search).get("id")
let urlprincipale = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
let refernzacarte = document.getElementById("card")
const cercaALBUM =async ()=>{
    let responsive = await fetch(urlprincipale+urlid)
    let risposta = await responsive.json();
    let conferma = await risposta;
    console.log(conferma)
    console.log(conferma.name)
    conferma.forEach((el)=>{
        scrivi(el)
        
    })
}
cercaALBUM()
function scrivi (Scritta){
    refernzacarte.innerHTML += `   <div class="col me-5 mb-5 ">
   <div class="d-flex justify-content-between ">
     <div class="d-flex ms-4 align-items-top">
       <p>1</p>
         <img class="ms-4 me-2"src="${Scritta.picture_small}" width="30px" height="30px"  alt="">
   <p>ocean aventure</p>
     </div>
   
   <p>290909</p>
   <p>3:12</p>
   </div>
   </div>` 
}