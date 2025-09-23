// if type same directly goes to ===
// if type different does coercion  

console.log(null == undefined);  // return true no idea they know abstract operations
console.log("xy" == 10);  // false convert string to number and then compare false because of NaN
 
console.log(false == "0") // true
/*
x (false) = boolean = tonumber = 0 
y = string = number 
compare. 0 == 0 true
*/


console.log(null == false); // false
// null == 0 (after conversion) 

let obj = {
    "x":10,
    valueOf(){return 100;}
};

console.log(99 == obj);  
console.log(100 == obj);  100 == 100
