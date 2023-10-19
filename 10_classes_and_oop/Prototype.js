let myName = "hitesh           "

console.log(myName.truelength)



let myHeros = ["thor","spiderman"]
 
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}


Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyAnuj = function(){
    console.log(`Hitesh says Hello`);
}

// heroPower.hitesh()

// myHeros.hitesh()
// myHeros.heyAnuj()
// heroPower.heyAnuj()

//inheritance

const User = {
    name:"Anuj",
    email:"email@email.email"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User


//modern approach
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "AnujK    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUsername.trueLength()