 function loginUserMessage(username){
    return `${username} just logged in`
 }

 let message=loginUserMessage("Anuj Kumar")
 console.log(message)

 function calculateCartPrice(...num1){
    return num1
 }
 console.log(calculateCartPrice(200,400,500,2000))

 const user= {
    username: "Anuj",
    price:199
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is  ${anyobject.price}`)
 }
 handleObject(user)