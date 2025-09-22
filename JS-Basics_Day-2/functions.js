function odd_even(a){
    if (a % 2 ==0){
        return "Even"
    }
    else{
        return "Odd"
    }
};


function fact(a){
    temp = 1
    for (i=1;i<=a;i++){
        temp *= i
    }
    return temp
};

odd_even(10)
console.log(fact(3))


function odd_evenrange(a){
    for (i=1;i<=a;i++){
        console.log(i, "is", odd_even(i))
        
    }
}

// console.log always returns undefined
// arguments can be more but only take the first like function home(a,b).  home(a,b,c)  only takes first 2

/*
 how to check 
 prime are only divisible by 1 or by itself 
 */

function is_prime(a){
    if(a<1){
        return false;
    }
    for(let i = 2;i<a;i++){
        if (a%i==0){
            return false;
            }
        }
    return true;
    }

console.log(is_prime(2))