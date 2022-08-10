let option = {
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    }
}



function eliminaUtente(id, elemento, api, loggedID) {
    if (id == loggedID) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                fetch(api + "/" + id, option)
                    .then(response => response.json())
                    .then(response => {
                        elemento.remove()
                    })

            }
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Sorry but you cant!',
            text: 'You can Update or Delete only your profile',
            showConfirmButton: true
        })
    }

}

