let str = "javascript";
let map_F = {};

for (const rchar of str){ 
    if (map_F[rchar]){
        map_F[rchar] += 1
    }
    else{
        map_F[rchar] = 1
    }
}
console.log(map_F)


// important using variables use [] in syntax not .char it reads as key name map_F[rchar]



