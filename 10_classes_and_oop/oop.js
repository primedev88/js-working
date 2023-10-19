const user = {
    username:"hitesh",
    loginCount:8,
    signedIn:true,
    getUserDetails: function(){
        //console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())

// const promiseOne = new Promise()

function User(username,loginCount,isLogged){
    this.username=username
    this.loginCount=loginCount
    this.isLogged=isLogged

    //return this
}

// const userOne = User("Anuj",12,true)
// const userTwo = User("Kumar",14,false)

const userOne =new User("Anuj",12,true)
const userTwo =new User("Kumar",14,false)
console.log(userOne)