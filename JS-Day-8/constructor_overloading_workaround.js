class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static withName(name) {
    return new Person(name, 0);
  }

  static withNameAndAge(name, age) {
    return new Person(name, age);
  }
}

let p1 = Person.withName("Rajan");
let p2 = Person.withNameAndAge("Rajan", 25);



