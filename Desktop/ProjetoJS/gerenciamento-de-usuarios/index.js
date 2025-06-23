let fields = document.querySelectorAll('#form-user-create [name]');
let user = {};

fields.forEach((field, index) => {
    if (field.name == "gender" && field.checked === false) {
        console.log(field.value)
        user.gender
    } else {
        user[field.name] = field.value;
        console.log(field.value)
    }
})

console.log(user)