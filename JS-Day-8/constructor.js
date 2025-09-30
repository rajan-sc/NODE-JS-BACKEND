class Product {
    // name;  so now after declaring constructor you dont have to declare them sperately in class
    // price;
    // description;

    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    display () {
        console.log(`Product name is ${this.name} with price ${this.price} and the product description is ${this.description}`)
    }
}

const iphone = new Product("Iphone", 70000, "Mobile phone")
const macbook = new Product("Macbook Air M1", 100000, "Laptop")

console.log(iphone)
console.log(macbook.price)
iphone.display()
macbook.display()