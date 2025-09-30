// Function can be used as constructor and is used in older code because of the class are new thing for js inroduced recently.

function MimickContructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
        //return this ==> all the above code represents return this and what this function is returning
        // if you do primitive return (return 10;) it will be ignored/avoided.
    }


const a = new MimickContructor("Iphone", 10000, "ios phone") // here this binds it to new object a 
console.log(a)


// new keyword is used to create an instance of an object from a constructor function or a class.

// this is a special variable that refers to the context in which a function is executed.

// Its value depends on how the function is called.

