// to do inheritance using class we use the extend keyword

class Category {
  constructor(c) {
    this.category = c;
  }
}

class Products extends Category {
  constructor(c, n) {
    super(c);
    this.name = n;
  }
}

let iphone = new Products("Phone", "Iphone 17");
console.log(iphone);

// not making a copy
// when we do extend if we do changes in base classes or function there will be changes in the objects created using the classes (refelected)


// Multilevel Inheritance no multiple inheritance

