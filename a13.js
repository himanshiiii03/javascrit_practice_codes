const user = {
    username:"himanshi",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "himanshi"
//     console.log(this);
// }

// chai()

// const chai = function (){
//     let username = "himanshi"
//     console.log(this.username);
// }

const chai = ()=> {
    let username = "himanshi"
    console.log(this);
}

// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1+num2

const addTwo = (num1, num2) => (num1 +num2)


console.log(addTwo(3,4))