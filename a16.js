// LOOPS(ITERATION) /FOR LOOP


for (let i = 0;  i <= 10; i++) {
    const element = i;
    if (element == 5){
       // console.log("5 is best number");
    }
    //console.log(element);
}

// console.log(element);

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10 ; j++) {
//     // console.log(`inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*'+j+'='+i*j);
//     }
    
// }

let myArray = ["flash","flashman","superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element =myArray [index];
   // console.log(element);
    
}

// break and continue

//for (let index = 0; index <=20 ; index++) {
 //   if (index == 5){
       // console.log(`Detected 5`);
   //     break;
   // }
    //console.log(`value of i is ${index}`);
//}

// for (let index = 0; index <=20 ; index++) {
//     if (index == 5){
//         console.log(`Detected 5`);
//         continue;
//     }
//     console.log(`value of i is ${index}`);
// }

// let index = 0 
// while(index <= 10){
//     console.log(`Value of index is ${index}`);
//     index = index+2
// }

// let myArray2 = ["flash", "batman","superman"]

// let arr = 0
// while (arr < myArray2){
//     console.log(`value is ${myArray2[arr]}`);
//     arr = arr+1
// }

// do {
//      console.log(`score is${score}`);
//     score++
// } while (score <=10);


//*----- for of-----------

// ["","",""]
// [{},{},{}]

// const array = [1,2,3,4,5]

// for (const num of array){
//     console.log(num);
// }

// const greetings = "hello world"
// for (const greet of greetings){
//     console.log(`each char is ${greet}`)
// }

//*****maps ********

const map = new Map()
Map.set('IN',"India")
Map.set('USA',"united state of america")
Map.set('Fr',"France")

//console.log(map);

for (const key of map) {
    console.log(key);
}