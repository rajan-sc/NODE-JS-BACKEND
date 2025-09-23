//coercion change type automatically / implicit typecasting by set of rules 

//abstract operations = not part of the ecmascript just in docs to aid the docs only


//to number abstract operation
console.log(2-undefined); // NaN 
console.log(2-null);  // +0   

console.log(1-"453");  // convert the string to valid no
console.log(1-"34hf");  //NaN

console.log(0 - 0xa); //0xa is hexadecimal value 10

console.log(10 - true); //9
console.log("-----------------------------")

arr = {
    "x":10,
    valueOf(){return 10;}
};
console.log(arr.valueOf())


arr1 = {
    "x":10,
    toString(){return "hello";}
};


console.log(arr1.toString())


console.log(100 - arr)


azz = {
    "x":10,
    toString(){return 9;}
};
console.log(arr - azz);

x = 
console.log(!x)
if (x>10){
    console.log("true")
}else{
    console.log("false")
}


