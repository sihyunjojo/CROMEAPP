const a = 5; // 항상 const를 쓰도록 최대한 노력하고
let b = 2; // 가끔은 let을 쓰도록한다.


var myName = "sihyun" // old한 방식의 var는 자제한다.


const amIFat = null;
let c;

const daysOfWeek =["mon","tue","wed","thu","fri","sat","sun"];

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log( myName);

b = 5;

console.log(a / b);


console.log(amIFat);
console.log(c);

console.log(daysOfWeek[2]);

daysOfWeek.push("sun");

console.log(daysOfWeek);