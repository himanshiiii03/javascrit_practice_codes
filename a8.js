// Dates

// let myDate =  new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 7, 18 )
//let myCreatedDate = new Date(2025, 7, 18 ,5 , 3)
// let myCreatedDate = new Date("2025-07-19")

// console.log(myCreatedDate.toLocalString());

let myTimeStamp =  Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


`${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday:"long"
    
})
