console.log(typeof 8); //typeof shows the type of the value :: output = "number" in strings


//corner cases 
console.log(typeof undefined); // = undefined
console.log(typeof null); // type is object


console.log(typeof NaN) // = number

// Arithmetic operators
console.log(10 + 2);
console.log(10 - 2);
console.log(10 / 2);
console.log(10 * 2);
console.log(10 % 2); //remainder
console.log(10 / 3);
console.log(2**2); // for power or squares if you want to do root you just do ** 0.5  
// if you want to do floor you do 
// parsient(5/2) or math.floor(5/2)
console.log(parseInt(5/2)); 

// Assignment operator
let x = 10; 
x += 2;
console.log(x);

// comparison operators 
console.log(10<2); // gives true or false

//Logical operators     logic gates
console.log(true || true); //or 
console.log((10<5)&&(1<3));
console.log(!true)

/*
will do coercion (change the type of the values acc.to rules)
 what values are falsy in js
nan
0
-0
false
null
undefined
*/

//example 
console.log(10 && 6); // ytf it gives 6 as output 








