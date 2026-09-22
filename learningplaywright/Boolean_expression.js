// let a = 18;
// let AcceptedTerms = "Yes";
// let result = (a>=18)&& (AcceptedTerms === "Yes");
// console.log(result);


let result1 = Boolean(0);
console.log(result1);

let result2 = Boolean(1);
console.log(result2);

let result3 = Boolean(""); 
console.log(result3);

let result4 = Boolean("Hello");
console.log(result4);

let result5 = Boolean(null);
console.log(result5);

let result6  = Boolean(undefined);
console.log(result6);

let result7 = Boolean("false");
console.log(result7);

let result8 = Boolean([]);   
console.log(result8);

let result9 = false || true && false;
console.log(result9);

let result10 = (false || true) && false;
console.log(result10);

let result11 = !false && true;
console.log(result11);

let result12 = !(true && false);
console.log(result12);

// let a = 10;
// let b = "10";

// let result13 = a == b;
// console.log(result13);


// let a = 10;
// let b = "10";

// let result14 = a === b;
// console.log(result14);

let result15 = !!"Hello";
console.log(result15);

let result16 = !!0;
console.log(result16);

let result17 = !(5 > 3 && 10 < 20);
console.log(result17);

let x = 10;

let result18 = x > 5 && x < 15 || x === 20;
console.log(result18);

// let x = 10;

// let result19 = x > 5 && x < 15 || x === 20;
// console.log(result19);


let isLoggedIn = true;
let isAdmin = false;
let isBlocked = false;

let result20 = isLoggedIn && (isAdmin || !isBlocked);
console.log(result20);


let a = 5;
let b = 10;
let c = 15;

let result21 = a < b && b < c && c > 20;
console.log(result21);