const mynums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=mynums.map((num)=>num+10)
// console.log(newNums)

const newNums1=mynums.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>50)
console.log(newNums1)

// const myTotal = mynums.reduce(function(accumulator,currval){
//     return accumulator+currval
// },0)

const myTotal = mynums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal)