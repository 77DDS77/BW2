import { Shop } from '../export/class.js'

export function getShops() {
    fetch("http://localhost:3000/shops")
    .then(risposta => risposta.json())
    .then(shops => {
        for(let shop of shops) {
            shop = new Shop(shop.id, shop.shopName, shop.address, shop.mail, shop.tel, shop.products)
        }
    })
}


import { Utente } from '../export/class.js' 

export function getUsers() {
    fetch("http://localhost:3000/users")
    .then(risposta => risposta.json())
    .then(utenti => {
        for(let user of utenti) {
            user = new Utente(user.id, user.username, user.firstName, user.lastName, user.gender, user.email, user.tel)
        }
    })
}


//login functions
export function checkLogStatus() {
    let showLoggedUsername = document.querySelector('#logged-user')
    let loginBtn = document.querySelector('#login-btn')
    let logoutBtn = document.querySelector('#logout-btn')

    let userLogged = sessionStorage.getItem('user logged in') ? JSON.parse(sessionStorage.getItem('user logged in')) : {};
    //show the logged user username + switch button between login and logout
    if(userLogged.username) {
        showLoggedUsername.textContent = userLogged.username;
        loginBtn.classList.add('d-none');
        logoutBtn.classList.remove('d-none');
    }else{
        showLoggedUsername.textContent = 'guest'
    }

    //logout btn 
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logOut();
    })
}

//dont neet to actually import this, since checkLogStatus uses it I just neet to import checkLogStatus
export function logOut(){ 
    Swal.fire({
        title: 'Are you sure you want to log out?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log me out!'
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: `You logged out!`,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 1500
            }).then(() => {
                sessionStorage.removeItem('user logged in')
                window.location.reload();
            })
        }
      })
}

export function modificaUtente(id, loggedID){
    if(id == loggedID){
        window.location.href = "modifica-users.html?id=" + id;
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Sorry but you cant!',
            text: 'You can Update only your profile',
            showConfirmButton: true
        })
    }
}