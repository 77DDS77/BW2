const apiUtenti = "http://localhost:3000/shops"

let button = document.querySelector("#salva-shops")

button.addEventListener("click", function(e) {
    e.preventDefault()
    let shop = document.querySelector("#shopName")
    let address = document.querySelector("#address")
    let email = document.querySelector("#mail")
    let telefono = document.querySelector("#tel")
    let prodotti = document.querySelector("#products")

    let shops = {
        shopName: shop.value,
        address: address.value,
        mail: email.value,
        tel: telefono.value,
        products: prodotti.value
    }

    let option = {
        method: "POST",
        body: JSON.stringify(shops),
        headers: {
            "content-type": "application/json"
        }
    }
    if (shop.value == "" || address.value == "" || email.value == "" || telefono.value == "" || prodotti.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'you must fill all input fields',
          })
    } else {

        fetch(apiUtenti, option)
        .then(res => res.json())
        .then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Your new shop has been created',
                text: `shop ${res.shop} ID #${res.id} has created`,
                showConfirmButton: true
              }).then(() => {
                location.href = "index.html"
              })
        })
    }

})