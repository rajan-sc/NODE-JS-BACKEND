const player1 = {
    firstname: 'Virat',
    lastname: 'Kohli',
    numberToBat: 3,
    canBowl: false,
    getDetails: function () {
        console.log(this.firstname, this.lastname, "comes at No.", this.numberToBat);
    }
}

const obj = function (x, y) { // can also take aguments
    console.log(x+y);
    this.getDetails();
}

obj.call(player1,0,0); // also pass the args after the call_value (player1)

// call will call the function with the value in the context to 'this' keyword

