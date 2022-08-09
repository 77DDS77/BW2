window.onload = checkLogStatus();

const apiUtenti = "http://localhost:3000/users"

let loginBtn = document.querySelector('#btn-login')

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkLogin();
})



//click on login, check if user exists and if input matches
function checkLogin() {
    let inputUser = document.querySelector('#login-username')
    let inputPwrd = document.querySelector('#login-password')

    fetch(apiUtenti)
        .then(res => res.json())
        .then(users => {
            for (let user of users) {
                if (inputUser.value && inputPwrd.value) {

                    if (inputUser.value == user.username || inputUser.value == user.email) {
                        if (inputPwrd.value == user.password) {

                            //both userInput and password are correct
                            Swal.fire({
                                icon: 'success',
                                title: `Your're logged in!`,
                                showConfirmButton: false,
                                timerProgressBar: true,
                                timer: 2500
                            }).then(() => {

                                sessionStorage.setItem('user logged in', JSON.stringify(user));
                                checkLogStatus();
                            })

                        } else {
                            //input wrong password
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Uncorrect password, try again!',
                                showConfirmButton: false,
                                timer: 2500,
                                timerProgressBar: true
                            }).then(inputPwrd.value = '')
                        }
                    } else {
                        //username or email don't match any existing user
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Username or E-mail must be incorrect!',
                            showConfirmButton: false,
                            timer: 2500,
                            timerProgressBar: true
                        }).then(() => {
                            inputUser.value = '';
                            inputPwrd.value = '';
                        })
                    }

                } else {
                    //one or both input fields are empty
                    console.log('campi vuoti');
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You must fill the input fields!',
                        showConfirmButton: false,
                        timer: 2500,
                        timerProgressBar: true
                    })
                }
            }
        })
}

function checkLogStatus() {
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

function logOut(){ 
    Swal.fire({
        title: 'Are you sure you want  to log out?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'You logged out.',
            'See you next time!',
            'success'
            )
            sessionStorage.removeItem('user logged in')
        }
      })
}