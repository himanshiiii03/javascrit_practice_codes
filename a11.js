
function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("i");
}

//sayMyName()

//  function addTwoNumbers(numers1,numers2){
//     console.log(number1 + number2);
//  }         

function addTwoNumbers(number1,number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
 }         

 const result = addTwoNumbers(3, 5)

 //console.log("Result:", result);


 function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username}just logged in `
 }

// console.log(loginUserMessage("himanshi"))
//console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,300.400))


const user = {
    username: "himanshi",
    price: 199
}

function handleObject(anyobject){
    console.log(`anyname is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)


handleObject({
    username:"sam",
    price:399
})


const myNewArray = [200,333,444,555]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));