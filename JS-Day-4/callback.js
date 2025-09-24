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

