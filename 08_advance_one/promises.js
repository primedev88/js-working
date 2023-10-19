const promiseOne = new Promise((resolve,reject)=>{
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(()=>{
        console.log('Async task is complete')
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log("Promise consumed")
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task2")
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 resolved")
});


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user)
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:"Anuj",password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>console.log("The Promise is either resolved or rejected"))


const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true ;
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()