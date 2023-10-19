const User={
    _email:'ak@email.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    },

    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password=value
    }
}
const ak = Object.create(User)
console.log(ak.email)