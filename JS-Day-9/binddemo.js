const player1 = {
    firstname: 'Virat',
    lastname: 'Kohli',
    numberToBat: 3,
    canBowl: false,
    getDetails: function () {
        console.log(this.firstname, this.lastname, "comes at No.", this.numberToBat);
    }
}

const obj = function () {
    this.getDetails();
}


let x = obj.bind(player1); // creates a new function and bind the provided value.
x();

// Binds the this keyword to provided value.