//how to sort an array 

const arr = [1,53,1,2,543,76,5,234]

console.log(arr.sort()) // it will sort in a  lexiographic way

// sort by increasing order

// using a comparator function (sort takes a comparator function) sort if hof

arr.sort(function (a, b){
    return a-b; // if a < b then a-b will be negative  // if negative a will be placed before b 
    // if a > b then a-b will be positive then b is placed before a
})


console.log(arr)