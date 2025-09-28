function process() {
    let i = 0;
    let j = [1,2,3];
    let k = 0;
    function innerprocess(){
        i += 1;
        console.log(j)
        return i;
    }
    return innerprocess;
};


console.log(process) // [Function: process]
console.log(process())  // [Function: innerprocess]

let res = process()

console.log(res) // [Function: innerprocess]
console.log(res()) // 1
console.log(res()) // 2
console.log(res()) // 3 

// here it remebers only i and j which was used in the innerprocess js automatically get only 2 
