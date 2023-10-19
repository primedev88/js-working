const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descriptor)
//console.log(Math.PI)

const ak = {
    name:"Anuj",
    price:"infinite",
    isAvailable:true
}

//console.log(ak)
// console.log(Object.getOwnPropertyDescriptor(ak,'name'))

// Object.defineProperty(ak,'name',{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(ak,'name'))

for(let [key,value] of Object.entries(ak)){
    console.log(`${key} : ${value}`)
}