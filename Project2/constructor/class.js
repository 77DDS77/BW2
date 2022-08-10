//ricordarsi di usare id user e id shop per id su html 
//ricordarsi di puntare agli accordion originali giusti
//id e password da non mostrare su accordion
//COMMENTARE


//user creation class
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
        this.attributeButton()
        this.attributeCollapse()
        this.generaBody()
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
        headerClone.id = this.id + "-header" 
    }

    attributeButton() {

        let button = document.querySelector("#utente-" + this.id + " .accordion-header button")
        button.textContent = `${this.firstName} ${this.lastName}`
        button.setAttribute("data-bs-target", "#collapse-" + this.id)
    }

    attributeCollapse() {
        let collapse = document.querySelector("#utente-" + this.id + " #utente-IDuser")
        collapse.id = "collapse-" + this.id
        collapse.setAttribute("data-labelledby", "utente-" + this.id)
    }

    generaBody() {
        let bodyAccordion = document.querySelector("#collapse-" + this.id + " .accordion-body")
        for (let prop in this) {
            if (prop != "id") {
                let p = document.createElement("p")
                let span = document.createElement("span")
                span.textContent = prop + ": "
                span.className = "text-primary"
                p.textContent = this[prop]
                p.prepend(span)
                bodyAccordion.append(p)

            }
        }
        let bottoneUpdate = document.createElement("a")
        bottoneUpdate.textContent = "Update"
        bottoneUpdate.className = "btn btn-warning"
        bottoneUpdate.href = "modifica.html?id=" + this.id
        console.log(this.id)
        let bottoneDelete = document.createElement("a")
        bottoneDelete.textContent = "Delete"
        bottoneDelete.className = "btn btn-danger ms-2"

        let accDelete = document.querySelector("#utente-" + this.id)
        bottoneDelete.addEventListener("click", () => {
            eliminaUtente(this.id, accDelete)
        })

        bodyAccordion.append(bottoneUpdate, bottoneDelete)

    }




}

