

let ricerca = document.querySelector("#ricerca")
let ricercaButton = document.querySelector("#searchBtn")
let searched = document.querySelector("#searched-users")
let api = "http://localhost:3000/shops"

import { Shop } from "../export/class.js";




let ric = []
let ricercabili = []

fetch(api)
    .then(response => response.json())
    .then(response => {
        for (let shop of response) {
            ricercabili.push(shop)
            console.log(ricercabili)
        }
        ric = ricercabili.map(r => r.shopName.toUpperCase())
        console.log(ric)
        ricerca.addEventListener("input", search)
    })



function search() {
    let itemsBox = document.querySelector(".search-items-box")
    while (itemsBox.firstChild){
        itemsBox.removeChild(itemsBox.firstChild)

    }
    for (let i = 0; i < ric.length; i++) {

        if (ric[i].indexOf(ricerca.value.toUpperCase()) > -1 && ricerca.value != "") {
            
            let li = document.createElement("div")
            let accFind = `#shop-${ricercabili[i].id}`
            let accFindClone = document.querySelector(accFind).cloneNode(true)
            itemsBox.append(li)
            modificaClone(accFindClone, li)

        } 
        
    }
    
}

function modificaClone(clone, li) {
    
    clone.id = clone.id + "-searched"
    li.append(clone)

    let headerClone = document.querySelector(`#${clone.id} h2`)
    headerClone.id = headerClone.id + "-searched"

    let button = document.querySelector(`#${clone.id} h2 button`)
    button.setAttribute("data-bs-target", "#collapse-" + clone.id)

    let divCollapse = document.querySelector(`#${clone.id} .accordion-collapse`)
    console.log(button)
    divCollapse.id = "collapse-" + clone.id

    console.log(divCollapse)




    return clone

}












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
*/