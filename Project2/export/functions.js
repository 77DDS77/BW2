import {Shop} from './class.js'

export function getShops() {
    fetch("http://localhost:3000/shops")
    .then(risposta => risposta.json())
    .then(shops => {
        for(let shop of shops) {
            shop = new Shop(shop.id, shop.shopName, shop.address, shop.mail, shop.tel, shop.products)
        }
    })
}


import { Utente } from '../export/class.js' ;

export function getUsers() {
    fetch("http://localhost:3000/users")
    .then(risposta => risposta.json())
    .then(utenti => {
        for(let user of utenti) {
            user = new Utente(user.id, user.username, user.firstName, user.lastName, user.gender, user.email, user.tel)
        }
    })
}