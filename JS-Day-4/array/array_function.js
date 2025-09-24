// map is hof for strings

const arr = [1,2,3,4,5] // original array

function sqr(el){
    return el*el // return square
}


const n_arr = arr.map(sqr) // takes sqr as an argument

console.log(n_arr) // returns an array.  // [ 1, 4, 9, 16, 25 ]



const obj1 = [1, 4, 91, 4, 9, 1, 25, 16, 25]

console.log(obj1.sort())



// you can also get all the element no. and idx from the map if your function have 2 args
// first one should by element and 2nd one index

const obj = [1,2,3,4,5]

function print(element, idx){
    return `Element at index ${idx} is ${element}`;
};

const pprin = obj.map(print)
console.log(pprin)



function customMapper(arr, func){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(func(arr[i], i));
    }
    return result;
}

const valip = customMapper(obj, print);
console.log(valip);