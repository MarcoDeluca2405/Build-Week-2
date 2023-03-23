
const input_search=document.getElementById("input_search");
const url="https://striveschool-api.herokuapp.com/api/deezer/search/?q=";
const urlArtist=" https://striveschool-api.herokuapp.com/api/deezer/artist/";
const id="?q={query}";
const row=document.getElementById("row");
let artistArray= [];





const getArtist=async ()=>{
    row.innerHTML="";
    let search=input_search.value;
let responsive=await fetch(url+search,{
    method:"GET"
});

let Nameartist= await responsive.json();
let item=await Nameartist.data;
console.log(item);
item.forEach(element => {
    artistArray.push(element);
        getListArtist(element);
});





}

console.log(artistArray);





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
<object id="museca" data="${getItem.preview}" type="audio/mpeg">
  <param name="autostart" value="false">
  <param name="loop" value="false">
  <param name="src" value="nome_file.mp3">
</object>
<hr>


`;
}

