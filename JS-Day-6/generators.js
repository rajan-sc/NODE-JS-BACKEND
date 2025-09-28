function* fetchdata(){ // function * to write a generator function
    console.log("hello started");
    yield 1;
    yield 2;
    console.log("somewhere in middle");
    yield 3;
    yield 4;
    return 10;
    console.log("hello why??")
    yield 5;
    yield 6;

}


let a = fetchdata()

console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())

/*
hello started
{ value: 1, done: false }
{ value: 2, done: false }
somewhere in middle
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 10, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
 */

