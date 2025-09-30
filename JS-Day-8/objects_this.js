let iphone = {
    name : "Iphone 17",
    price : 60000,
    rating : 4.0,
    description : "Phone",

    display : function () {
        console.log(this);
    }
}

let Macbook = {
    name : "Macbook Air M1",
    price : 40000,
    rating : 5.0,
    description : "Laptop",

    display : () => {
        console.log(this);
    }
}

iphone.display() // prints the whole iphone object  // this is bound to object iphone
Macbook.display() // {} empty object
// here arrow function get the global objects through the lexical scoping 
// goes 1 step out to find the object associated




