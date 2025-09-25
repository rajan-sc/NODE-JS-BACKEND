function fun(inputstring, fn){
    //execute some algo on string
    let output = inputstring.split(","); 
    for(let i = 0; i<output.length; i++){
        fn(output[i])
    }
}



fun("name:rajan,age:24", function(ip){
    let arr = ip.split(":");
    console.log(arr[0], arr[1])
})   

// INVERSION OF CONTROL
// you dont't know how many time function(ip) is called 
// you are giving control of your fnx to other how they are handling it you don't know



// why Promise
// don't have to immediately attached the functionality against to callbacks where you have to immidiately tell what happens after callbacks
// doesn't return any value





