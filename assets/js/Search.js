
const input_search=document.getElementById("input_search");
const url="https://striveschool-api.herokuapp.com/api/deezer/search/?q=";
const urlArtist=" https://striveschool-api.herokuapp.com/api/deezer/artist/";
const id="?q={query}";
const row=document.getElementById("row");
let artistArray= [];
let current=document.getElementById("current");
let max=document.getElementById("max");
let aux=document.getElementById("audio");





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
let index=-1;
item.forEach(element => {
  index++;
    if (((search).toLowerCase()).includes((element.artist.name).toLowerCase()))
    {
        artistArray.push(element);
        getListArtist(element,index);
    }
    console.log(index);
    
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



const getListArtist=(getItem,index)=>{
 
      row.innerHTML+=`
<col class="col">


<button type="button" onclick=audioPlay(${index}); class="btn text-light">
<div class="card d-flex d-inline-flex bg-dark  h-25 w-100" style="width: 18rem;">
   


<div class="card-body d-flex d-inline align-items-center justify-content-between " id="buttonHover">
    <div class="img" onclick=location.href="./Album_Page.html?id=${getItem.album.id}" >
    <img src="${getItem.artist.picture}" class="card-img w-100" alt="...">
</div>
<h5 class="card-title my-0 overflow-hidden">${getItem.title_short}</h5>
    <p class="card-text my-0"><a href="./Artist_page.html?id=${getItem.artist.id}"> ${getItem.artist.name} </a></p>
    
  </div>

</div>

</div>
</button>

<audio id="myAudio">
<source src="${getItem.preview}" type="audio/mp3">
</audio>

`;  
    




}


const audioPlay=async (index)=>{
try {
  let responsive=await fetch(url+search);
  let conferma=await responsive.json();
  let item=conferma.data;
  let music=document.getElementById("myAudio");
  let title=document.getElementById("titolo");
  let nameArtsit=document.getElementById("nameArtist");

  title.innerText=item[index].title;
  nameArtsit.innerText=item[index].artist.name;

  let imgID=document.getElementById("imgId");
  imgID.src=item[index].artist.picture_small;


  music.play();

  console.log(item[index].id);

} catch (error) {
  
}


}


popola();




