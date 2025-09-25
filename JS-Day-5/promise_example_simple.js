function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function exec() {
               let num = getRandomInt(10);
            if(num % 2 == 0) {
                // if the random number is even we fullfill
                resolve(num);
            } else {
                // if the random number is odd we reject
                reject(num);
            }
            
        }, 5000);
           
        console.log("Exitting the executor callback in the promise constructor")});
    };




console.log("Starting....");
const a = createPromiseWithTimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like ... ", a);
console.log("Going to register my 1st set of handlers");



a.then(
    function fullfillmenthandler(value)
    {
        console.log("fullfilled with value",value);
        console.log(a);
    },
    function rejectionhandler(value){
        console.log("rejected with value",value);
        console.log(a);
    })
// a.then will execute when above setTimeout is done it was with register and then to the callback/event queue.

console.log("end of global code") 