class User {

    constructor (name, gender, birth, country, email, password, photo, admin) {
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date().toLocaleDateString('pt-BR')
    }

    // getters
    get name(){
        return this._name
    }
    get gender(){
        return this.gender
    }
    get birth(){
        return this.__birth
    }
    get country(){
        return this._country
    }
    get email(){
        return this._email
    }
    get password(){
        return this._password
    }
    get photo(){
        return this._photo
    }
    get admin(){
        return this._admin
    }

    get register(){
        return this._register
    }

    set name(value){
        return this._name = value
    }

    set gender(value){
        return this._gender = value
    }

    set birth(value){
        return this._birth = value
    }

    set country(value){
        return this._country = value
    }

    set email(value){
        return this._email = value
    }

    set password(value){
        return this._password = value
    }

    set photo(value){
        return this._photo = value
    }

    set admin(value){
        return this._admin = value
    }

    set register(value){
        return this._register = value
    }
}
 