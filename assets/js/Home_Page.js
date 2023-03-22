const row=document.getElementById("row");
const url=" https://striveschool-api.herokuapp.com/api/deezer/search?q=pop";
let arrayItem=[];



const getAlbum1=async () =>{

    let responsive=await fetch(url);
    let Name=await responsive.json();
    let item=await Name.data;

    console.log(item);
  
    

};



const getItemAlbum= (element)=>{

    row.innerHTML+=`
    
    
    
    <div class="card m-3 px-2 myCard">
        <div class="row">
          <div class="col col-4 ms-0 px-1">
            <img src="${element.cover_small}" class="img-fluid rounded-start" style="width:100%;" alt="...">
          </div>
          <div class="col-md-8 p-0">
            <div class="card-text d-flex h-100 w-100 align-items-center">
              <p class="card-title m-0 mx-2 overflow-hidden">${element.title}</p>
            </div>
          </div>
        </div>
      </div>

    
    
    `;
  

}


getAlbum1();





