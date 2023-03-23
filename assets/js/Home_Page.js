const row=document.getElementById("row");
const row2=document.getElementById("row2");
const url1=" https://striveschool-api.herokuapp.com/api/deezer/search?q=pop";
const url2=" https://striveschool-api.herokuapp.com/api/deezer/search?q=trap";
const url3=" https://striveschool-api.herokuapp.com/api/deezer/search?q=punk";
let arrayItem=[];



const getAlbum1=async () =>{

    let responsive=await fetch(url1);
    let Name=await responsive.json();
    let item=await Name.data;
    item.forEach(element => {
        arrayItem.push(element);
    });
    
    console.log(arrayItem);
    for(let i=0;i<6;i++){
       getItemAlbum1(arrayItem[i]);
    
    }
};

const getAlbum2=async () =>{

    let responsive=await fetch(url2);
    let Name=await responsive.json();
    let item=await Name.data;
    item.forEach(element => {
        arrayItem.push(element);
    });
    
    console.log(arrayItem);
    for(let i=0;i<6;i++){
       getItemAlbum2(arrayItem[i]);
    
    }
};
const getAlbum3=async () =>{

    let responsive=await fetch(url3);
    let Name=await responsive.json();
    let item=await Name.data;
    item.forEach(element => {
        arrayItem.push(element);
    });
    
    console.log(arrayItem);
    for(let i=0;i<6;i++){
       getItemAlbum2(arrayItem[i]);
    
    }
};







const getItemAlbum1= (element)=>{

    row.innerHTML+=`
    
    
    
    <div class="card m-3 px-2 myCard">
        <div class="row">
          <div class="col col-4 ms-0 px-1">
            <img src="${element.album.cover_small}" class="img-fluid rounded-start" style="width:100%;" alt="...">
          </div>
          <div class="col-md-8 p-0">
            <div class="card-text d-flex h-100 w-100 align-items-center">
              <p class="card-title m-0 mx-2 overflow-hidden">${element.album.title}</p>
            </div>
          </div>
        </div>
      </div>

    
    
    `;
  

}


const getItemAlbum2= (element)=>{

row2.innerHTML+=`

<div class="card cartecanz hoveraggio col-2 my-2" style="width: 12rem;">
<img src="${element.album.cover}" class="card-img-top mt-2 " alt="...">
<div class="card-body">
   <p class="card-text"><b class="d-block">Hot hits italia</b> <span>la playlist piu calda del momento</span></p>
</div>
</div>

`

}



getAlbum1();
getAlbum2();





