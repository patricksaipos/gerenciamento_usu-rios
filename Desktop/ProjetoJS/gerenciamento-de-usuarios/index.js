let fields = document.querySelectorAll('#form-user-create [name]');
let user = {};

function toast(position, icon, title){

    const Toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 60000,
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

function addLine(dataUser) {

    let tbody = document.querySelector(".list-user");
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${dataUser.admin}</td>
        <td>${new Date().toLocaleDateString('pt-BR')}</td>
        <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
    `
    tbody.appendChild(tr);
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

    addLine(user)

    toast("top-end", "success", "Usuário Criado com Sucesso")
})