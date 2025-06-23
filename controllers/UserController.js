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
            this.getPhoto().then((result) => {
                values.photo = result
                this.addLine(values, this.tableEl);
                this.clearData();
            }, (error) => {
                console.error(error)
            })
            
            this.toast.success("top-end", "success", "Usuário Criado com Sucesso");
            event.preventDefault();
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

    clearData(){
        let fields = [...this.formEl];

        fields.forEach((field, index) => {
            field.value = '';
        })
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

    verifyPhotoGender(){
        let genderField = [...this.formEl].find(field => field.name === 'gender' && field.checked);

        if(genderField){
            if (genderField.value == "M") {
                return './dist/img/avatar.png'
            } else {
                return './dist/img/avatar3.png'
            }
        }
    }

    getPhoto(){

        return new Promise((resolve, reject)=> {
            let fileReader = new FileReader();

            let photo = [...this.formEl.elements].filter(item => {
                if (item.name === 'photo'){
                    return item
                } 
            })

            let file = photo[0].files[0];

            if (!file) {
                file = this.verifyPhotoGender();
                console.log('fileReader',file)
                resolve(file)
            }

            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (e) => {
                reject(e)
            }

            fileReader.readAsDataURL(file)
        })

    }

}