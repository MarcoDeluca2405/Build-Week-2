

                


        





Lista = document.getElementById('lista');
let ID = new URLSearchParams(window.location.search).get('id');
console.log(ID)

console.log(Lista);

urlprova = "https://striveschool-api.herokuapp.com/api/deezer/artist/412"




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

       
       

        const convertURIToImageData = (url) => {
            return new Promise((resolve, reject) => {
              if (!url) {
                return reject();
              }
              const canvas = document.createElement('canvas')
              const context = canvas.getContext('2d')
              const image = new Image();
              image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
                resolve(context.getImageData(0, 0, canvas.width, canvas.height));
              }
              image.crossOrigin = "Anonymous";
              image.src = url;
            });
          }
          const url = oggetti.cover_big;
          const load = async () => {
            const img = await convertURIToImageData(url)
            console.log(img)

           
          }
          load()

          
          
          convertURIToImageData(oggetti.cover_big)
       



          function averageColor(imageElement) {
 
            // Create the canvas element
            var canvas
                = document.createElement('canvas'),
 
                // Get the 2D context of the canvas
                context
                    = canvas.getContext &&
                    canvas.getContext('2d'),
                imgData, width, height,
                length,
 
                // Define variables for storing
                // the individual red, blue and
                // green colors
                rgb = { r: 0, g: 0, b: 0 },
 
                // Define variable for the
                // total number of colors
                count = 0;
 
            // Set the height and width equal
            // to that of the canvas and the image
            height = canvas.height =
                imageElement.naturalHeight ||
                imageElement.offsetHeight ||
                imageElement.height;
            width = canvas.width =
                imageElement.naturalWidth ||
                imageElement.offsetWidth ||
                imageElement.width;
 
            // Draw the image to the canvas
            context.drawImage(imageElement, 0, 0);
 
            // Get the data of the image
            imgData = context.getImageData(
                        0, 0, width, height);
 
            // Get the length of image data object
            length = imgData.data.length;
 
            for (var i = 0; i < length; i += 4) {
 
                // Sum all values of red colour
                rgb.r += imgData.data[i];
 
                // Sum all values of green colour
                rgb.g += imgData.data[i + 1];
 
                // Sum all values of blue colour
                rgb.b += imgData.data[i + 2];
 
                // Increment the total number of
                // values of rgb colours
                count++;
            }
 
            // Find the average of red
            rgb.r
                = Math.floor(rgb.r / count);
 
            // Find the average of green
            rgb.g
                = Math.floor(rgb.g / count);
 
            // Find the average of blue
            rgb.b
                = Math.floor(rgb.b / count);
 
            return rgb;
        }
 
        // Function to set the background
        // color of the second div as
        // calculated average color of image
        var rgb;
 
        setTimeout(() => {
            rgb = averageColor(
                document.getElementById(oggetti.cover_big));
 
            // Select the element and set its
            // background color
            document
                .getElementById("due")
                .style.backgroundColor =
                'rgb(' + rgb.r + ','
                + rgb.g + ','
                + rgb.b + ')';
        }, 500)

        averageColor()

}
      




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
        cica = Math.ceil(eval(cirio[index].duration)/60)
        cico = eval([index+1])

        Lista.innerHTML += `<div class="d-flex justify-content-between rounded hoverAlbum" id="elementlist" onmouseover=hoverh(${[index]}) onmouseout=hoverh(${[index]})>
        <div class="d-flex"><span class="numberAlbum pt-2 my-3" >${cico}</span> &nbsp; &nbsp;<span class="row"><b>${titolo}</b> <span><a style="text-decoration:none;" href="Artist_Page.html?id=${cirio[index].artist.id}">${cirio[index].artist.name}</a></span> </span> </div> 
                <div  class="d-flex"> <div id="cuoricino${index}" class="me-3 pt-2 d-none"> 
                    <i id="cuorepieno${index}" onclick=riempi(${index}) class="bi bi-heart"></i> 
                            
                             </div>
                                <div id="cuoreNO${index}" onclick=riempi(${index}) class="d-none me-3 pt-2 "><i class="bi bi-heart-fill"></i> </div>
                             
                             <div class="Minutaggio pt-2">${cica}m</div>
        
        </div>
     </div>`
        
    }
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

     function randomizer(){
       numerorand = Math.floor(Math.random() * oggettovero.length)
       console.log(numerorand)
       return numerorand
     }

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
        
     }
    
   
}


