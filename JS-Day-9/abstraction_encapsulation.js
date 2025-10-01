// Abstraction = Hiding the implemtation details in a class and only showing the essentials features of an object.
// It focuses on what an object does and not how it does it 

// Diff b/w encapsulation and abstraction
// In encapsulation the variables / property / attributes are hidden  and direct access is restricted

/*
Feature	        Abstraction 🧩	                                                         Encapsulation 🔒
Focus	    Hides implementation details	                                    Hides data (variables)
Concerned   With What an object does	                                        How the object’s data is protected
Achieved    By Abstract classes, interfaces (Python abc, JS base class)	        Access modifiers (private, protected, getter/setter methods)
Example	    Vehicle.start() (you know it starts, but not how)           	    BankAccount.__balance (hidden, accessed only via methods)
Goal	    Expose only necessary behavior	                                    Restrict direct data access and provide controlled access
*/

class Products {
    #name; // # name not accesible outside class.
    #price;

    constructor(a, b, c){
        this.#name = a;
        this.#price = b;
        this.desc = c;
    }
    display(){
        console.log(this.#name, this.#price);
    }

    set name(a){
        if (typeof(a) !== 'string') {
            console.log("Invalid String");
            return;
        }
        else {
            this.#name = a
        }
    }

    set price(b) {
        if (b<0) {
            console.log("Error Price can't be negative you dumb")
        }
        else {
            this.#price = b;
        }
    }

    get name(){
        return this.#name;
    }

    get price(){
        return this.#price;
    }
};


const p = new Products("Iphone", "76000", "A damm good phone")
console.log(p)
p.name = "Macbook" // creates a new object varianle with key name and value Macbook
p.display()
console.log(p.name) // getter function
p.price = 100
// Cannot change or acess the #name from outside unless using functionality like setter or getters




/*

get → defines a getter method (access property like a variable, but it runs a function).

set → defines a setter method (assign to a property like a variable, but it runs a function).

They’re used to encapsulate and control access to object properties.

*/