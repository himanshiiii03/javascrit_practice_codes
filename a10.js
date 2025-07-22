// singleton 
// object.create
// object literals


// const mySym = Symbol("key1")


// const JsUser = {
//     name : "himanshi",
//     "full name" : "himanshi dubey",
//     mySym: "mykey1", 
//     age: 21,
//     location: "jabalpur",
//     email:"himanshi@google.com",
//     isLoggedIn: false,
//     lastLoginDays : ["monday","saturday"]
// }
    
    

//console.log(JsUser[email]);// this is wrong
//console.log(JsUser["email"]);
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

//JsUser.email = "himanshi@chatgpt.com"
//Object.freeze(JsUser)
//JsUser.email = "himanshi@microsoft.com"
//console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());


//+++++++++++++part 2 Object+++++++++++++++++++++++++++++

//const tinderUser =  new Object()
 const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.isLoggedIn  = false
 
// console.log(tinderUser);

const regularUser = { 
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "himanshi ",
            lastname: "dubey"
        }
    }
}

//console.log(regularUser.fullname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a",6: "b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2,obj4)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@ggmail.com"
    },
    {
        id: 1,
        email: "h@ggmail.com"
    },
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));



//+++++++++++++part 3++++++++++++++++++++++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor : "himanshi"
}

//course.courseInstructor

const {courseInstructor} = course

//console.log(courseInstructor);


