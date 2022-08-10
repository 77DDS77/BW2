/*

let ricerca = document.querySelector("#ricerca")
let ricercaButton = document.querySelector("#searchBtn")
let searched = document.querySelector("#searched-users")
let api = "http://localhost:3000/shops"

import { Shop } from "../export/class.js";


let itemsBox = document.querySelector(".search-items-box")

let ricercati = []
    fetch(api)
    .then(response => response.json())
    .then(response => {
        
            for( let utente of response){
                ricercati.push(utente.shopName)
                console.log(ricercati)
                if(((utente.shopName).toLowerCase()).startsWith(ricercata) && ricercata != "") {
                    console.log(ricercati)
                    console.log(utente.shopName)
                    console.log(((utente.shopName).toLowerCase()).startsWith(ricercata))
                    let li = document.createElement("li")
                    let a = document.createElement("a")
                    a.textContent = utente.shopName
                    li.id = utente.id
                    li.append(a)
                    itemsBox.append(li)
                    break
                } else if (ricercata == "" || ricercata != ((utente.shopName).toLowerCase()).startsWith(ricercata)) {
                    console.log("else")
                    while (itemsBox.firstChild){
                        itemsBox.removeChild(itemsBox.firstChild)

                    }
                }
            }
        
        
    })
})
*/

let ricercate = ricercati
ricerca.addEventListener("input", () => {
    let ricercata = ricerca.value
    console.log(ricercata)
    for (let ricerche of ricercate) {
        console.log(ricercate)
        console.log((ricerche.toLowerCase()).startsWith(ricercata), "   ", ricerche.toLowerCase())
        if ((ricerche.toLowerCase()).startsWith(ricercata) && ricercata != "") {
            console.log("fatto")
            let li = document.createElement("li")
            let a = document.createElement("a")
            a.textContent = ricerche
            li.append(a)
            itemsBox.append(li)
            ricercate.pop()
            ricercate = ricercate.filter(item => item !== ricerche)
        } else if (ricercata == "") {
            while (itemsBox.firstChild){
                itemsBox.removeChild(itemsBox.firstChild)
                
            }
            ricercate = ricercati
        }
    }

    
})
