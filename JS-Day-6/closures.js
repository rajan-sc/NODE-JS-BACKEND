function process() {
    let i = 0;
    function innerprocess(){
        i += 1;
        return i;
    }
    return innerprocess;
}


console.log(process) // [Function: process]
console.log(process())  // [Function: innerprocess]

let res = process()

console.log(res) // [Function: innerprocess]
console.log(res()) // 1
console.log(res()) // 2
console.log(res()) // 3 

// console.log(res()) output is 1 because of the closure property the variable i is stored in the memory under object.
// function res will check the closure for value i before checking in the global scope.
// That's why it didn't throws the error.



