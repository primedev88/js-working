const score=400
const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.89966
console.log(otherNumber.toPrecision(4));

const hundreds = 100000000000000000000000000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++++++++++Maths++++++++++++++++++++++++
console.log((Math.random()*10)+1)

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1)) +min)