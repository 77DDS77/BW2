

import { Shop } from "../constructor/class.js";

window.onload = getUsers()


function getUsers() {
    fetch("http://localhost:3000/shops")
    .then(risposta => risposta.json())
    .then(shops => {
        for(let shop of shops) {
            shop = new Shop(shop.id, shop.shopName, shop.address, shop.mail, shop.tel, shop.products)
        }
    })
}