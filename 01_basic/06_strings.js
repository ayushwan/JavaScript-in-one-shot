const myName = "Ayushwan"
const repoCount = 50 

// this is not a good pratice
// console.log(myName + reopCount + " Value");

// console.log(`hello my name is ${myName} and repocount is ${repoCount}`);

const gameName = new String("Ayush Kumar")

// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-10, 4);
console.log(anotherString);

const newStr = "  starting     ";
console.log(newStr);
console.log(newStr.trim());


const url = "https://www.google.234com";
console.log(url.replace('234', '.in'));
console.log(url.includes('google'));
console.log(url.includes('googe'));

console.log(gameName.split(' '));

