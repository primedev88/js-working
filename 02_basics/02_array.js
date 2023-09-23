const arr1=[0,1,2,3]
const arr2=[4,5,6,7]

// arr1.push(arr2)
// console.log(arr1)

// let arr3=arr1.concat(arr2)
// console.log(arr3)

let arr3=[...arr1,...arr2]
console.log(arr3)

const arr4=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr5 = arr4.flat(Infinity)
console.log(arr5)

console.log(Array.isArray("Anuj"))
console.log(Array.from("Anuj"))
console.log(Array.from({name:"Anuj"})) //interesting
