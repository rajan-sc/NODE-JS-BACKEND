const a = {}
let brr = ["as", "fdf", "fdf", "a","b"]

for (const value of brr){
    if (!a[value]) { // 
        a[value] = true;
    }    
}

console.log(Object.keys(a));

a["8"] = 12;
console.log(a)


