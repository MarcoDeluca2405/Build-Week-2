
Lista = document.getElementById('lista');
bodyCardMobile=document.getElementById('bodyCardMobile');
let ID = new URLSearchParams(window.location.search).get('id');
console.log(ID)

console.log(Lista);

urlprova = "https://striveschool-api.herokuapp.com/api/deezer/artist/412"

function backgrounddinamic() {
    if (ID.length > 6) {
            pato = ID
            let varo = pato.slice(0,6)

        console.log('maggiore di 6')
        console.log("ciao",varo)
        console.log(pato);

        document.getElementById('due').style.background=`linear-gradient(0deg, #292929 70%, #${varo} 100%)`;
    } else {

        document.getElementById('due').style.background=`linear-gradient(0deg, #292929 70%, #${ID} 100%)`;
    }
    
}

console.log(ID.length)
//   style="background: rgb(41,41,41);background: linear-gradient(0deg, rgba(41,41,41,1) 70%, grey 100%);"



async function fetchata(){
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${ID}`)
    const oggetti = await response.json();
    console.log(oggetti)
    console.log((oggetti.tracks).data)
    console.log(oggetti.title)

    Controllo((oggetti.artist).name)
    fillpage((oggetti.tracks).data)
    document.getElementById('immagineAlbum').innerHTML = `<img src="${oggetti.cover_big}" id="bigCover" class="img-fluid my-3 mx-3 image_t" alt="..."></img>`
    fillpage2((oggetti))



      /*function getcolor(imageElem, ratio) {
        console.log(imageElem)
        const canvas = document.createElement('canvas')
        console.log(canvas)
         
        canvas.width = imageElem.width 
        canvas.height = imageElem.height 
        
        let width = canvas.width
        let height = canvas.height

        const context = canvas.getContext('2d');

        console.log(context);
        context.drawImage(imageElem,0,0);

        let data,length;
        let i = -4, count = 0

        try {
            data = context.getImageData(0,0,width,height)
            length = data.data.length
        } catch (error) {
            console.log(error)
            return{
                R:0,
                G:0,
                B:0
            }
        }
        let R,G,B

        R = G = B = 0

        while((i += ratio * 4)<length){
            ++count
            R+= data.data[i]
            G+= data.data[i + 1]
            B+= data.data[i + 2]
        }
    
        R = ~~(R / count)
        G = ~~(G / count)
        B = ~~(B / count)
        console.log(R,G,)
        return{
            R,
            G,
            B
        }
       
        
    }    
    const image = document.querySelector('#bigCover');
    function ciao() {
        const {R,G,B} = getcolor(image,4)
        console.log(R,G,B)
    }
    ciao();*/
         

}
      


backgrounddinamic();

console.log()
  



function fillpage2(params) {
    titolo = params.title;
    console.log('titolo', titolo)
    document.getElementById('titotloAlbum').innerHTML = titolo;
    document.getElementById('autoreAlbum').innerHTML =`<a href="Artist_Page.html?id=${params.artist.id}">${params.artist.name}</a>`;
    document.getElementById("nomeAltro").innerText += params.artist.name;
}




fetchata();

function fillpage(cirio){
    

    for (let index = 0; index < cirio.length; index++) {
        
        titolo = cirio[index].title
        cica = cirio[index].duration
        cico = eval([index+1])

        Lista.innerHTML += `<div class="d-flex justify-content-between rounded hoverAlbum align-items-center" id="elementlist" onmouseover=hoverh(${[index]}) onmouseout=hoverh(${[index]})>
        <div class="d-flex align-items-center"><span class="numberAlbum pt-2 my-3" >${cico}</span> &nbsp; &nbsp;<span class="row my-2 spazioZero"><b>${titolo}</b> <span><a style="text-decoration:none;" href="Artist_Page.html?id=${cirio[index].artist.id}">${cirio[index].artist.name}</a></span> </span> </div> 
                <div  class="d-flex align-items-center"> <div id="cuoricino${index}" class="me-3 pt-2 d-none"> 
                    <i id="cuorepieno${index}" onclick=riempi(${index}) class="bi bi-heart"></i> 
                            
                             </div>
                                <div id="cuoreNO${index}" onclick=riempi(${index}) class="d-none me-3 pt-2 "><i class="bi bi-heart-fill"></i> </div>
                             
                             <div class="Minutaggio">${timing(cica)}</div>
                             <div class="MinutaggioMobile"><i class="bi bi-three-dots-vertical trePunti"></i></div>
        
        </div>
     </div>`;
        
    }
}


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


function riempi(par) {
    let cuorep = document.getElementById(`cuorepieno${par}`);
    let cuoreN = document.getElementById(`cuoricino${par}`);
    let cuoreno = document.getElementById(`cuoreNO${par}`)
    cuorep.classList.toggle('bi-heart');
    cuoreN.classList.toggle('d-none');
    cuoreno.classList.toggle('d-none');
    
}



function hoverh(par) {
    let cuore = document.getElementById(`cuoricino${par}`);
       cuore.classList.toggle('d-none');
}




async function Controllo(params) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${params}`)
    const oggetto = await response.json();
    const oggettovero =   oggetto.data;

     console.log(oggettovero)

     for (let index = 0; index < 6; index++) {
        
        console.log(index)
        document.getElementById('altriAlbum').innerHTML += 
        `
         
        <a href="Album_Page.html?id=${(oggettovero[index].album).id}" class="card cartecanz hoveraggio col-2 my-2" style="width: 12rem;">
               <img src="${(oggettovero[index].album).cover}" class="card-img-top mt-2 " alt="...">
               <div class="card-body">
                  <p class="card-text"><b class="d-block">${(oggettovero[index].album).title}</b> </p>
               </div>
            </a> 
     `;
     bodyCardMobile.innerHTML=`                      
     <h4>${oggettovero[index].album.title}</h4>
     <div class="d-flex align-items-center mb-2 hi">
       <div><img src=${oggettovero[index].artist.picture_small}></div>
       <p class="mb-0 ms-3">${oggettovero[index].artist.name}</p> 
     </div>
     <p> Album ‧ 2020</p>
`;
        
     }
    
   
}

mylike=[]
async function like (codice){
    const risposta1 = await  fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${ID}`)
    const oggett2 = await risposta1.json();
    let arraynuova = oggett2.tracks.data
  console.log("ccc",oggett2)
  
    console.log(arraynuova)
   
   let oggetto = {
    name:arraynuova[codice].title,
    mp3:arraynuova[codice].preview,
   
    


   }
   mylike.push(oggetto)
     var valore = localStorage.getItem("like")
     console.log(mylike)
     mylike.forEach((el)=>{
        console.log(el.name)



if (el.name!=valore.name){
       localStorage.setItem("like",JSON.stringify (mylike))
     
       
}
     }
     )
 

}


