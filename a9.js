//  array

 //const myArr  = [0,1,2,3,4,5,6]
// const myHeros =  ["ranbeer, salman"]

// const myArr2= new Array(1,2,3,4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( typeof newArr);

// slices, splice

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)


// console.log(myn1);
// console.log("B", myArr);


// const myn2 = myArr.splice(1,3)
// console.log("C", myArr);
// console.log(myn2);

// /++++++++++++Array part 2+++++++++++++++++++++++++

const  marvel_heros = [ "thor", "ironman","spiderman"]
const dc_heros = [ "superman","flash","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]

//console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("himanshi"));
console.log(Array.from("himanshi"));
console.log(Array.from({name: "himanshi"}))// intrsting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));