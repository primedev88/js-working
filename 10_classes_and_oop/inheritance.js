class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const ak = new Teacher('ak', 'email@email.com','123')
ak.addCourse()
ak.logMe()

const bk = new User('bk')
bk.logMe()