//selecting popup box overlay button 

let popupoverlay = document.querySelector(".popupoverlay")
let popupbox = document.querySelector(".popupbox")
let addpopupbutton = document.getElementById("addpopupbutton")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


let cancelpopup = document.getElementById("cancelpopup")
cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container addbook booktitleinput bookauthorinput descriptioninput

let container = document.querySelector(".container")
let addbook = document.getElementById("addbook")
let booktittleinput = document.getElementById("booktittleinput")
let bookauthorinput = document.getElementById("bookauthorinput")
let bookdescriptioninput = document.getElementById("bookdescriptioninput")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    let div = document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktittleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
                <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook (event){
    event.target.parentElement.remove()
}