// shuffling array
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


let arr = [1,0,0,0,1,1,1,0,0,0,1,1,0,1]

// all arr in one pass 
// 000 then 1111
i = 0
j = arr.length - 1
while(i <= j){
    if (arr[i] == 1){
        swap(arr,i,j);
        j--; // include the new 1
    }
    else{
        i++;
    }
}
console.log(arr)



