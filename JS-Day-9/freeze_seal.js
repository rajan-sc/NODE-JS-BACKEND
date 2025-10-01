const a = {
  x: 1,
  y: 0,
};

a.x = 2;
a.z = 4;
console.log(a);

console.log("seal start--------------");
// here Object is an internal method

Object.seal(a); // after seal you can only update can't add new properties
a.x = 10;
a.c = 4;
console.log(a);

console.log("freeze start--------------");
Object.freeze(a); // after freeze you can't update nor add any new property

a.x = 1;
a.c = 4;

console.log(a);
