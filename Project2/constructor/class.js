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