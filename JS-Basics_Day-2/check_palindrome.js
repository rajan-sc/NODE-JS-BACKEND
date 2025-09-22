function check_palindrome(num){
    let str = "" + num;
    let i = 0;
    let j = str.length - 1;
    while (i <= j){
        if(str[i] == str[j]){
            i ++;
            j --;    
        }
        else {
            return false
        }
    }
    // if loop completes 
    return true;
}


console.log(check_palindrome("rajar"))