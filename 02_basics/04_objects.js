//const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

const regularUser={
    email:"sjdfgijdf",
    fullname:{
        userfullname:{
            firstname:"Anuj",
            lastname:"kumar"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)
console.log(regularUser.fullname?.userfullname.firstname) //checks if name doesn't exist

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={obj1,obj2}
const obj4=Object.assign(obj1,obj2)
console.log(obj3)
console.log(obj4)

const obj5={...obj1,...obj2}
console.log(obj5)

const course={
    coursename:"js in english",
    price:"999",
    courseInstructor:"Anuj"
}

const {courseInstructor:instructor}=course
//console.log(courseInstructor)
console.log(instructor)

const navbar = ({company})=>{
    console.log(company)
}
navbar({company:"Anuj"})
