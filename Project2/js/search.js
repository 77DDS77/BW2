

let ricerca = document.querySelector("#ricerca")
let ricercaButton = document.querySelector("#searchBtn")
let searched = document.querySelector("#searched-users")

import { Shop } from "../constructor/class.js";

ricercaButton.addEventListener("click", function(){
    let ricercata = ricerca.value
    fetch(api)
    .then(response => response.json())
    .then(response => {
        for( let utente of response){
            if(utente.username == ricercata) {
                location.href = "modifica.html?id=" + utente.id 
            }
        }
    })
})