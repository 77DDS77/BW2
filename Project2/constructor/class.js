//ricordarsi di usare id user e id shop per id su html 
//ricordarsi di puntare agli accordion originali giusti
//id e password da non mostrare su accordion
//COMMENTARE


//user creation class

export class Utente{
    constructor(id, username, firstName, lastName, gender, email, tel, password){

    }
}

//shoop creation class
export class Shop{
    constructor(id, shopName, address, mail, tel, products) {
        this.id = id
        this.shopName = shopName
        this.address = address
        this.mail = mail
        this.tel = tel
        this.products = products
        
        this.showShop()
    }
    //fa partire tutti i metodi per creare la lista di shop
    showShop() {
        this.generateHtml()
        this.changeTitle()
        this.changeButton()
        this.changeCollapse()
        this.generaBody()
    }
    //crea l'html clonando i contenitori impostati su display-none
    generateHtml() {
        let target = document.querySelector("#myShops")
        let targetChild = document.querySelector("#myShops .accordion-item")
        let clone = targetChild.cloneNode(true)
        clone.id = "shop-" + this.id
        target.append(clone)
        clone.classList.add("bg-dark")
    }

    changeTitle() {
        let header = document.querySelector("#shop-" + this.id + " h2")
        header.id = this.id + "-header"
    }

    changeButton() {
        let button = document.querySelector("#shop-" + this.id + " .accordion-header button")
        button.textContent = this.shopName
        button.setAttribute("data-bs-target", "#collapse-" + this.id)
    }

    changeCollapse() {
        let collapse = document.querySelector("#shop-" + this.id + " #shop-shopID")
        collapse.id = "collapse-" + this.id
        collapse.setAttribute("data-labelledby", "utente-" + this.id)
    }

    generaBody() {
        let body = document.querySelector("#collapse-" + this.id + " .accordion-body")

        for (let prop in this) {
            if (prop != "id") {
                let p = document.createElement("p")
                let span = document.createElement("span")
                span.textContent = prop + ": "
                p.classList.add("text-light")
                span.className = "text-primary"
                p.textContent = this[prop]
                p.prepend(span)
                body.append(p)

            }
        }
        let bottoneUpdate = document.createElement("a")
        let bottoneDelete = document.createElement("a")

        bottoneUpdate.textContent = "Update"
        bottoneUpdate.className = "btn btn-warning"
        bottoneUpdate.href = "modifica.html?id=" + this.id
        bottoneDelete.textContent = "Delete"
        bottoneDelete.className = "btn btn-danger ms-2"

        let accDelete = document.querySelector("#shop-" + this.id)
        let api = "http://localhost:3000/shops"
        bottoneDelete.addEventListener("click", () => {
            eliminaUtente(this.id, accDelete, api)
        })

        body.append(bottoneUpdate, bottoneDelete)

    }
}   




export class Utente {
    constructor(id, username, firstName, lastName, gender, email, tel, password){
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.tel = tel;
        this.password = password;

        this.originaUtente()
    }

    //Il metodo "originaUtente" contiene tutte le indicazioni, raggruppate anch'esse in metodi, per costruire la struttura dell'accordion del singolo utente e assegnare i contenuti.

    originaUtente(){
        this.clonatore()
        this.attributeHeader()
    }



//Il metodo "clonatore" cloniamo il contenuto interno dell'accordion (quello in d-none, o mondo delle idee), attribuiamo un id univoco e lo appendiamo all'interno del contenitore esterno, che è visibile.
    clonatore() {
        let extContainer = document.querySelector("#oneUser")
        let intContainer = document.querySelector(".accordion-item")
        let clone = intContainer.cloneNode(true)
        clone.id = "utente-" + this.id
        extContainer.append(clone)
    }

    attributeHeader() {

        let headerClone = document.querySelector("#utente-" + this.id + " .accordion-header")
        console.log(headerClone)
        headerClone.id = "utente-" + this.id + "-header" 
    }












}











//shoop creation class
export class Shop{
    constructor(id, shopName, address, mail, tel, products){

    }
}

