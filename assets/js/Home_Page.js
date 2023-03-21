const input_search=document.getElementById("input_search");
const url="https://striveschool-api.herokuapp.com/api/deezer/search/?q=";
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

<div class="card d-flex d-inline-flex bg-dark  h-25 w-100" style="width: 18rem;">
   


<div class="card-body d-flex d-inline align-items-center justify-content-between ">
    <div class="img">
    <img src="${getItem.artist.picture}" class="card-img w-100" alt="...">
</div>
<h5 class="card-title my-0 overflow-hidden">${getItem.artist.name}</h5>
<h5 class="card-title my-0 overflow-hidden">${getItem.album.title}</h5>
    <p class="card-text my-0">dsff</p>
    <a href="#" class="btn-sm btn-dark my-0">Vai</a>
  </div>

</div>
</div>

<hr>



`;



}







