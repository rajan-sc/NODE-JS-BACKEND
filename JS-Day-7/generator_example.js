function* FetchNextElement() {
    console.log("inside generator")
    const x = 10;
    yield 11;
    console.log("entering after yield");
    const y = x + (yield 30);   // yeild even when written in the operation argument 
                                // still have same power will halt the code execution until next()
    console.log("value of y is ", y);
}

console.log("start");
const iter = FetchNextElement()
console.log("Called Generator");


console.log("First", iter.next());
console.log("Second", iter.next());
console.log("Third", iter.next(1)); // the value will go to same place where you last yielded 

// after yield it will start from the same yield and check whether anything else to be expected to be done 



// pass a value to iter.next(10) it will go to last yielded place
