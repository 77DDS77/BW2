

let ricerca = document.querySelector("#ricerca")
let ricercaButton = document.querySelector("#searchBtn")
let searched = document.querySelector("#searched-users")
let resultContainer = document.querySelector(".search-items-box")
let ric = []
let ricercabili = []
let radioUser = document.querySelector("#radioUser")
let radioShop = document.querySelector("#radioShop")


radioShop.addEventListener("click",() => {
    cleanResultContainer()
    cleanFields()
    let api = 'http://localhost:3000/shops'
    var filtro = '#shop-'
    fetch(api)
    .then(response => response.json())
    .then(response => {
        for (let shop of response) {
            ricercabili.push(shop)
        }
        
        ric = ricercabili.map(r => r.shopName.toUpperCase())
        ricerca.addEventListener("input", () => {
            search(filtro)
        })
    })
})

radioUser.addEventListener("click",() => {
    cleanResultContainer()
    cleanFields()
    let api = 'http://localhost:3000/users'
    var filtro = '#utente-'
    fetch(api)
    .then(response => response.json())
    .then(response => {
        for (let shop of response) {
            ricercabili.push(shop)
        }
        
        ric = ricercabili.map(r => r.firstName.toUpperCase())
        ricerca.addEventListener("input", () => {
            search(filtro)
        })
    })
})





function search(filtro) {
    let itemsBox = document.querySelector(".search-items-box")
    cleanResultContainer()
    for (let i = 0; i < ric.length; i++) {

        if (ric[i].indexOf(ricerca.value.toUpperCase()) > -1 && ricerca.value != "") {
            
            let li = document.createElement("div")
            let accFind = `${filtro}${ricercabili[i].id}`
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
    divCollapse.id = "collapse-" + clone.id


    return clone

}

function cleanResultContainer(){
    while (resultContainer.firstChild){
        resultContainer.removeChild(resultContainer.firstChild)
    }
}

function cleanFields(){
    ricerca.value = '';
    ric = [];
    ricercabili = [];
}