//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

let myDate2 = new Date("01-14-2023")
console.log(myDate2.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myDate2.getTime())
