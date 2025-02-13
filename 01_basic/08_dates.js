let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getMonth());

// console.log(typeof myDate);
// let myCreatedDate = new Date(2025, 1, 14)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let createDate = new Date("01-10-2025")
// console.log(createDate.toLocaleString());

let myTime = Date.now();
// console.log(myTime);
// console.log(myDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleString('default',  {
    weekday: "long"
})