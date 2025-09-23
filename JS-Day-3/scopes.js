

var x = 10;  // available everywhere global scope

function hello(n){
    let l = 10;  // block scope only visible to code below inside block

    console.log(l)
    console.log(x) //can't see the global scope when var x present inside the  fnx
    console.log("(---------------)") 
    var x = 11 
    console.log(x) // onl

}


var teacher = "Rajan";
function fun() {
    console.log(teacher) // undefined 
    var teacher = "Raj";
    content = "NO"; // without var let and const automatically begin global when value is assigned auto global
    console.log(teacher);
}
function gun() {               
    var student = "Hello";
    console.log(student);
}


fun();
console.log(content); // in global scope content became global 

gun(); // in global scope


if (false) {
    var z = "nonon why??"
}

console.log(z) // gives undefined lexical scoping