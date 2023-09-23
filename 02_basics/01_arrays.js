//array

const myArr = [0,1,2,3,4,5,,6,true,"Anuj"]
console.log(myArr[7])

const myArr2=new Array(1,2,3,4)
console.log(myArr2[3])

myArr.push(6)
myArr.push(7)
console.log(myArr)

myArr.unshift(9)
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))

myArr.unshift(9)
console.log(myArr)
console.log(myArr.indexOf(9))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice splice
console.log(myArr)
console.log(myArr.slice(1,3))

console.log(myArr)

console.log(myArr.splice(1,3)) //prints all elements in the range including starting and ending indices and most importantly removes those elements from parent array
console.log(myArr)