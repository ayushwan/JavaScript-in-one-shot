// primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 199
const scoreValue = 199.34
const isLoggedIn = false    
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);

console.log(id === anotherId);

const bigNumber = 35353435343534n


// Reference (non primitive)
// Array, Objects, functions

const heros = ["shaktiman", "naagraj", "amitabh"]

let myObj = {
    name: "Ayush",
    age: 23
}

const myFunction = function(){
    console.log("Hello Ayushwan");   
}

console.log(typeof outsideTemp);
console.log(typeof heros);
console.log(typeof myFunction);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let myName ="Ayushwan";

let anotherName = "Ankur";
anotherName = "Sunendu Sen"

console.log(myName);

console.log(anotherName);

let UserOne = {
    email: "akppji@gmail.com",
    upi: "845u98@ybl"
}

let UserTwo = UserOne;

console.log(UserOne.email);

UserTwo.email = "sen@gmail.com";

console.log(UserOne.email);

