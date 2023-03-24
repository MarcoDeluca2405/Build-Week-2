function scrivi(){
    let cerca = localStorage.getItem("like")
  let nuova =JSON.parse(cerca)
console.log(nuova)



nuova.forEach((ev)=>{
let appendi = document.getElementById("appendi")
let create = document.createElement("div")
create.innerHTML=`<div class="d-flex " id="coloraLike">
<div class="d-flex align-items-center" id="piaciute">
    <h3 class="mx-1"> ${ev.name} </h3>
   <a href="${ev.mp3}" class="btn btn-success">Clicca per la canzone</a>
</div>
</div>`

appendi.appendChild(create)
})
}
scrivi()