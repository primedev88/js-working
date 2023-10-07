const coding=['js','ruby','java','python','cpp']

const values=coding.forEach((item)=>{
    console.log(item);
    return item;
})

console.log(values)

const mynums=[1,2,3,4,5,6,7,8,9,10]

const newNums1=mynums.filter((num)=> num>4) // filter return values that can be stores in another array
console.log(newNums1)

const newNums2=mynums.filter((num)=>{
    return num>4
})
console.log(newNums2)

const newNums=[]
mynums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)