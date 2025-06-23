let fields = document.querySelectorAll('#form-user-create [name]');
fields.forEach((field, index) => {
    if (field.name == 'gender' && field.checked) {

        console.log('field: ', field)

    } else {

    }
})