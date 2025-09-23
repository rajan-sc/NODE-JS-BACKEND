// iife = immediately invoke function expression

(function x(y){
    console.log("HI", y);
})("Rajan");


function z(){
    return 1;
};

function m(){
    return 2;
};

var res = (function o_e(i){
    if (i%2 == 0){
        return m();
    }else{
       return z();
    }
})(10);

console.log(res)





















const f = function fun(){ // named function expression 
    console.log("funnnnnnn")
}

// fun() not defined error 

// scope of f 

//cant acess without f 


const j = function (){
    console.log("anonymous function expression")
}


// Que if you can't acess the fun() why give it name :

// good naming convention and use case should be identified through the name   ----- readabilty decreses
// you have to name the function in recursion
// if i dont give name to the function i can't see what function being called using console.trace (hard to debug logs- stack trace)


function fun(fn){
    console.log("Welcome home");
    console.trace()     // to find the stack of fucntions called //                          
    fn();
};

fun(function (){    // if i 
    console.log("hihi")
})