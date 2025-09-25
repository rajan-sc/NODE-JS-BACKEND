// solve inversion of control
let a = new String()

 console.log(typeof(a)) // after writing new it creates an object

function done(){
    return "Resolve Fullfilled";
};
function fail(){
    return "rejected";
};

// resolve and reject are functions for executor function check here:
function createsimplepromise(){
return new Promise(function check(resolve, reject){
    if (10<100){
        resolve(done());  // how to write resolve and reject 
    }
    else{
        reject(fail());
    };

 });
};

let x = createsimplepromise();
 console.log(typeof(x));

 console.log(x)

// with for loop synchronous
function createloopsyncpromise(){
return new Promise(function check(resolve, reject){
    for(let i=1; i<10000000000; i++){};
    if (10<100){
        resolve(done());  // how to write resolve and reject 
    }
    else{
        reject(fail());
    };

 });
};

// let y = createloopsyncpromise();
//  console.log(typeof(y));
//  console.log(y)
//  console.log("hi")


// with for timeout asynchronous
function createasyncpromise(){
return new Promise(function check(resolve, reject){
    setTimeout( function(){
    if(1000<100){
        resolve(done());  // how to write resolve and reject 
    }
    else{
        reject(fail());
    }},5000);

 });
};


var z = createasyncpromise();
 console.log(typeof(z));
 console.log(z)
 console.log("hi")

 

 setTimeout(function getvalue(a){ 
    console.log(z)
 }, 6000);

 // for rejection you need to have then and catch to deal with thre reject function 