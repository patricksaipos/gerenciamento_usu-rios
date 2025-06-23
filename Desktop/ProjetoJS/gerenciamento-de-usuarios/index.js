let fields = document.querySelectorAll('#form-user-create [name]');
let user = {};

function toast(position, icon, title){

    const Toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: icon,
        title: title
      });

}

document.getElementById("form-user-create").addEventListener("submit", event => {
    event.preventDefault();
    fields.forEach((field, index) => {
        if (field.name == "gender" && field.checked === false) {
            user.gender
        } else {
            user[field.name] = field.value;
        }
    })

    toast("top-end", "success", "Usuário Criado com Sucesso")

    console.log(user)
})