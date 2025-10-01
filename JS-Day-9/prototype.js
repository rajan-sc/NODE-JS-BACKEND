// Prototype : Mechanism to inherit properties or merthods from one object to other
// each object created have a prototype property with itself
// you can attach new functionality to this prototype after creating objects 
// they inherit new proprties using prototype chaining and not class


class Products {
    constructor (a){
        this.name = a
    }
}

let a = new Products("Rajan")

Products.prototype.display = function display() {console.log(this.name)};  // later attached display function to the prototype of object a 

console.log(a.name)

a.display()


// below both are same 
console.log(a.__proto__)  // using dunder proto to directly access the prototype in the chain 
console.log(Products.prototype)



