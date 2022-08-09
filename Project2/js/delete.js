let option = {
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    }
}



function eliminaUtente(id, elemento, api) {
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
}

