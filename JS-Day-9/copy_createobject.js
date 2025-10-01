// Question : You have to create a new object with same value as previous 

const x = {
    a : 1,
    b : 3,
    c : 5
}


/* you cant do like this :
let n = x 

if you do this what will happen they both will point to the same object in the memory so any modification to one will
change both of them. 
// same reference 

*/

let y = Object.create(x) // create a new object with different memory location in heap

y.a = 10;

console.log(x, y);

console.log(y.__proto__) // the value of x are stored in the prototype and you can access those values/ property as well.
