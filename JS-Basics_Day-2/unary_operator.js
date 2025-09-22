/*
postfix a--
prefix --a
*/

let x = 10;
let y = --x;
console.log(x, y);
// 9 9 first fix then assign (decrement)

let z = 10;
let t = z--; 
console.log(z, t);
// 9, 10.   first assign then fix 


// also unary + and - 
a = "10"
b = +a
console.log(a, b)
// 10 10 and for negative give - value it change the types and try to convert in no 
// if unable return NaN

