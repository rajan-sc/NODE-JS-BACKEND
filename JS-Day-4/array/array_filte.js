//  function argument should always return boolean
// if true then add element to new array


const arr = [1,2,34,5,6,7,9,10]

let arri = arr.filter(function even(x){
    return x%2==0;
});

console.log(arri)

function sumof(previousresult, current){
    return previousresult+current;
}
function mulof(previousresult, current){
    console.log(previousresult, current)
    return previousresult*current;
}
let aatt = [1,2,3,4,5]

let p = aatt.reduce(mulof)

console.log(p)