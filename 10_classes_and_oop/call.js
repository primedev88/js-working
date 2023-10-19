function SetUsername(username){
    this.username = username
    console.log('called')
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    //this.username=username
    this.email=email
    this.password=password
}

const ak = new createUser("ak47","ak@fb.com","123")
console.log(ak)