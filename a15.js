// CONTROL FLOW

//if

const isUserLoggedIn = true
const temperature = 41

// if(temperature<50){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`User power:${power}`);
// }

// console.log(`User power:${power}`);

const balance = 1000

//if (balance>500) console.log("test"),console.log("test2");

// if(balance>500){
//     console.log("less than");
// }else if(balance<750){
//     console.log("less than 750");

// }else if(balance<900){
//     console.log("less than 750");

// }else {
//     console.log("less than 1200");

// }


// const UserLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(UserLoggedIn&& debitCard&&2==2){
//     console.group("Allow to buy course");
// }

// if(loggedInFromGoogle||loggedInFromEmail){
//     console.log("User logged in");
// }



//+++++++++++++switch+++++++++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month =  3

// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feb");
//         break;
        
//         case 4:
//             console.log("april");
//             break;
    
//     default:
//         console.log("march");
//         break;
// }

// ++++++++++++++ truthy++++++++++++++++++

//  const userEmail = "h@himanshi.ai"

// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }


// falsy values

//false,0,-0,BigInt 0n,"", null, undefined,Nan

//truthy values
//"0",'false',"",[],{},function(){}

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

//Nullish coalescing operator(??): null undefined-

let val1;
//val1 = 5 ?? 10
//val1 = null??10
val1 = undefined ?? 15