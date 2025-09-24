function fun(){
    console.log("hello");
};


// function gun is hof
function gun(f){
    f()
    console.log("shoot")
}

gun(fun)


