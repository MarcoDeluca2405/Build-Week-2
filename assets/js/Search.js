
const input_search=document.getElementById("input_search");
const url="https://striveschool-api.herokuapp.com/api/deezer/search/?q=";
const urlArtist=" https://striveschool-api.herokuapp.com/api/deezer/artist/";
const id="?q={query}";
const row=document.getElementById("row");
let artistArray= [];


let search;


const getArtist=async ()=>{
    row.innerHTML=""
    search=input_search.value;
    if(!search){popola();}
let responsive=await fetch(url+search,{
    method:"GET"
});

let Nameartist= await responsive.json();
let item=await Nameartist.data;
console.log(item);
item.forEach(element => {
    if (((search).toLowerCase()).includes((element.artist.name).toLowerCase()))
    {
        artistArray.push(element);
        getListArtist(element);
    }
    console.log(search);
    
});
}

console.log(artistArray);


let popola=(search)=>{
    if(!search){
        row.innerHTML=`
        <h5 class="text-center mb-4">Sfoglia tutto</h5>
        <div class="container mx-0 px-1">
          <div class="row row-cols-2 text-center">
            <div class="col">
              <button class="genereBtn genere1 btn position-relative" type="button"><span> Podcast</span>
               </button>
            </div>
            <div class="col pb-3">
              <button class="genereBtn genere2 btn position-relative" type="button"><span> Create per te</span>
               </button>
            </div>
            <div class="col pb-3">
              <button class="genereBtn genere3 btn position-relative" type="button"><span> Nuove uscite</span>
               </button>
            </div>
            <div class="col pb-3">
              <button class="genereBtn genere4 btn position-relative" type="button"><span> Pop</span>
               </button>
            </div>
            <div class="col pb-3">
              <button class="genereBtn genere5 btn position-relative" type="button"><span> Hip Hop</span>
               </button>
            </div>
            <div class="col pb-3">
              <button class="genereBtn genere6 btn position-relative" type="button"><span class="d-flex flex-column align-items-start"> <div>Dance/</div> <div>Elettronica</div> </span>
               </button>
            </div>
            <div class="col pb-3">
              <button class="genereBtn genere7 btn position-relative" type="button"><span> Latina</span>
               </button>
            </div>
            <div class="col pb-3">
              <button class="genereBtn genere8 btn position-relative" type="button"><span> Classifiche</span>
               </button>
            </div>
          </div>
          

        </div>`
    }
}



const getListArtist=(getItem)=>{

      row.innerHTML+=`
<col class="col">

<button type="button"  class="btn text-light" onclick=location.href="./Album_Page.html?id=${getItem.album.id}"; >
<div class="card d-flex d-inline-flex bg-dark  h-25 w-100" style="width: 18rem;">
   


<div class="card-body d-flex d-inline align-items-center justify-content-between " id="buttonHover">
    <div class="img">
    <img src="${getItem.artist.picture}" class="card-img w-100" alt="...">
</div>
<h5 class="card-title my-0 overflow-hidden">${getItem.title_short}</h5>
    <p class="card-text my-0"><a href="./Artist_page.html?id=${getItem.artist.id}"> ${getItem.artist.name} </a></p>
    
  </div>

</div>

</div>
</button>



`;  
    




}



popola();




