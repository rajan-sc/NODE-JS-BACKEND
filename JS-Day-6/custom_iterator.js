function FetchNextValue(arr){
    let idx = 0;
    function next(){
        if (idx == arr.length){
        return {value : undefined, done : true};
        }
        const nextvalue = arr[idx]
        idx++
        return {value : nextvalue, done : false};
    }
    return {next}; // return an object {next} 
};


let new_arr = [10,9,8,7,0,10]

const automaticfetcher = FetchNextValue(new_arr)

console.log(automaticfetcher.next())
console.log(automaticfetcher.next())
console.log(automaticfetcher.next())
console.log(automaticfetcher.next())
console.log(automaticfetcher.next())
console.log(automaticfetcher.next())
console.log(automaticfetcher.next())

// here we are using closure object to get idx variable to do some operations






