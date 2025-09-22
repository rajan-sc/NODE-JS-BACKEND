let a = {
    name: "Rajan",
    age: 24
}


// how to access
// from key you can acess values  not vice versa

console.log(a["name"]) // put key as string return the value 
console.log(a.name) 

// objects are mutable
a.name = "Raj"
console.log(a.name) 

// in objects keys are unique but can have same values for different keys


// how to add a new property in object
a.marks = 72;
// if not presnt will add or present will update
a["Company"] = "Good"


console.log(a)

delete a.name // delete a key value pair

console.log(a) 