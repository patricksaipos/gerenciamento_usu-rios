class UserController {

    constructor (formId, tableId) {
        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)
        this.toast = new Toast();
    }

    onSubmit(){
        this.formEl.addEventListener("submit", event => {
            event.preventDefault();
            let values = this.getValues();
            this.getPhoto((content) => {
                values.photo = content
                this.addLine(values, this.tableEl)
            })
            
            this.toast.success("top-end", "success", "Usuário Criado com Sucesso")
        })
    }

    addLine(dataUser, tableEl) {
        console.log(dataUser)
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${new Date().toLocaleDateString('pt-BR')}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        `
        this.tableEl.appendChild(tr);
    }

    getValues(){

        let user = {}
        let fields = [...this.formEl];


        fields.forEach((field, index) => {
            if (field.name == "gender" && field.checked === false) {
                user.gender
            } else {
                user[field.name] = field.value;
            }
        })

        return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admim
        )
    }

    getPhoto(cb){
        let fileReader = new FileReader();

        let photo = [...this.formEl.elements].filter(item => {
            if (item.name === 'photo'){
                return item
            } 
        })

        let file = photo[0].files[0];

        fileReader.onload = () => {
            cb(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    }

}