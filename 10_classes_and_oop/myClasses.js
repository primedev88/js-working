// ES6

// class User{
//     constructor(username, email, password){
//         this.username =username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const ak = new User('ak','ak@email.com','123')

// console.log(ak.encryptPassword())
// console.log(ak.changeUsername())

//behind the scene

function User(username,email,password){
    this.username =username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const bk = new User('bk','ak@email.com','123')

console.log(bk.encryptPassword())
console.log(bk.changeUsername())