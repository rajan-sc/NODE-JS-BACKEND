// falsy values only for no. values
/*
NaN
0
-0
null 
undefined

//comapre 0 0 can be true 

*/
console.log(null === undefined); // in abstract its true

// for non number value
console.log("abc" === "abc") // same check index and value of each


let obj1 = {x:10};
let obj2 = {x:10};
let obj3 = {y:10};
 
console.log(obj1 === obj2); // fasle
console.log(obj1 === obj3); // fasle
console.log(obj1 ===obj1);  // comparing the same memory value object then gives true

