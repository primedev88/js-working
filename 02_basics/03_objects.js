//singleton
//object literals
// Object.create
const mySym = Symbol("key1")
const Jsuser={
    name:"Hitesh",
    "fullName":"Anuj Kumar Sharma",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"sdfasdf@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["fullName"])
// console.log(Jsuser[mySym])
// myArray = ["h","i"]

Jsuser.email = "anuj@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email = "anuj@microsoft.com"
console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello Js user")
}
console.log(Jsuser.greeting)
console.log(Jsuser.greeting())

Jsuser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(Jsuser.greetingTwo())