//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})(); //Here semicolon is important because after executing it does not know where to end the context

(()=>{
    console.log(`DB connected two`)
})();

((name)=>{
    console.log(`DB connected two : ${name}`)
})('anuj Kumar');