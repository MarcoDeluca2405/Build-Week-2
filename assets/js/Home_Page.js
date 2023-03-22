const row=document.getElementById("row");
const url1="https://striveschool-api.herokuapp.com/api/deezer/album/75621062";
const url2="https://striveschool-api.herokuapp.com/api/deezer/album/303950837";
const url3="https://striveschool-api.herokuapp.com/api/deezer/album/7040437";




const getAlbum1=async () =>{

    let responsive=await fetch(url1);
    let items=await responsive.json();

    console.log(items);

};
const getAlbum2=async () =>{

    let responsive=await fetch(url2);
    let items=await responsive.json();

    console.log(items);

};
const getAlbum3=async () =>{

    let responsive=await fetch(url3);
    let items=await responsive.json();

    console.log(items);

};



getAlbum1();
getAlbum2();
getAlbum3();

