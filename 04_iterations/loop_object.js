// const myObject={
//     js:'JavaScript',
//     cpp:'C++',
//     rb:'ruby',
//     swift:'swift by apple'
// }

// for (const key in myObject) {
//     console.log(key)
//     console.log(myObject[key])
// }

const prog = ['js','rb','py','java']
for (const key in prog) {
    console.log(key,"->",prog[key])
}

const coding=['js','ruby','java','python','cpp']

coding.forEach(function name(item){
    console.log(item)
})

coding.forEach((val)=>{console.log(val)})

function printMe(item,index,arr){
    console.log(item, index, arr)
}
coding.forEach(printMe)

