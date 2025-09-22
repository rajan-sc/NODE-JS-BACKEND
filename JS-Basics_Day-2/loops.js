


// what is the difference between while and if statements?
// if statement will run only once
// while loop will run multiple times until the condition is false

 
// while (i >= 1) {
//     console.log(i);
//     i-=1;
// }  

ans = 0
for (let j = 1; j <= 10; j++) {
    ans += j;
};
console.log(ans);
console.log("-------");
j = 25;
while (j >= 1) {
    if (j%2 == 0){
        console.log(j)
    }
    j-=1;
};


for (let i = 25; i>=1; i--){
    if (i%2 == 0){
        console.log(i)
    }
};


//do while loop
// will do in code block weather while loop runs or not 
a = 1
do {
    a++
}
while(a<=10){
    console.log(a)
}
console.log(a)



// for of loop

arr = [1,2,34,5,6,7,7,null,undefined,NaN]

for (const value of arr){
    console.log(value)
}

// for just transverse through the array
