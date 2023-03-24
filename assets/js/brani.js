function scrivi(){
    let cerca = localStorage.getItem("like")
  let nuova =JSON.parse(cerca)
console.log(nuova)



nuova.forEach((ev)=>{
let appendi = document.getElementById("appendi")
let create = document.createElement("div")
create.innerHTML=`<div class="col">
<div class="d-flex align-items-center" id="piaciute">
    <h1 class="mx-1"> ${ev.name} </h1>
    <img src="">
</div>
</div>`

appendi.appendChild(create)
})
}
scrivi()