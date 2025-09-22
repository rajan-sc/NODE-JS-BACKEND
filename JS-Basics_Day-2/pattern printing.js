function square_pattern(n){
    for (let i =1;i<=n;i++){
        let star = "";
        for (let j=1; j<=n; j++){
            star += "*";
            
        }
        console.log(star)
    }
};
    

// string concatenation always create new string and doesn't update old strings
// strings are immutable can't modify or change 
 

function pattern(n){
    for (let i=1;i<=n; i++){
    let star = "";
    for (let j=1; j<=i; j++){
        star += "*";
        
    }
    console.log(star);
}
};

// right angles spaaced triangle gap
function triang(n){
    for (let i=1; i<=n; i++){
        let stringt = "";
        let space_p = n-i
        for(let j=1; j<=space_p; j++){
            stringt += " "; 
        }
        for(let k=1; k<=i; k++){
            stringt += "*";
        }
    console.log(stringt)
    }

}

// Ye line by line chalega ye socho ki iske baad kya print hoga line m 

function pyramid(n){
    for (let i=1; i<=n; i++){
        let stringt = "";
        let space_p = n-i
        for(let j=1; j<=space_p; j++){
            stringt += " "; 
        }
        letter_pppp = i*2-1
        for(let k=1; k<=letter_pppp; k++){
            stringt += "*";
        }
    console.log(stringt)
    }

};

function rev_t(n){
    for (let i=1; i<=n; i++){
        let stringt = "";
        for(let j=n; j>=i; j--){
            stringt += "*"; 
        }
        console.log(stringt)
    }

};

function pyramidrev(n){
    for (let i=1; i<=n; i++){
        let stringt = "";
        let space_p = n-i
        for(let j=1; j<=space_p; j++){
            stringt += " "; 
        }
        letter_pppp = i*2-1
        for(let k=1; k<=letter_pppp; k++){
            stringt += "*";
        }
    console.log(stringt)
    }
    for (let q=1; q<=n-1; q++){
        let stringtt = "";
        for(let w=1; w<=q; w++){
            stringtt += " "; 
        }
        letter_pppp = (n-q)*2-1
        for(let l=1; l<=letter_pppp; l++){
            stringtt += "*";
        }
    console.log(stringtt)
    }

};


function butterfly(n){
    for (let i=1; i<=(n-1)/2; i++){
        let stringt = "";
        for(let w=1; w<=i; w++){
            stringt += "*";
        }
        for(let j=1; j<=; j++){
            stringt += " "; 
        }
        for(let k=1; k<=i; k++){
            stringt += "*";
        }
    console.log(stringt)
    }
}

butterfly(7)