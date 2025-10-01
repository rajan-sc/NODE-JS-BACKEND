function A() {};
function B() {};

A.prototype.fun = function fun() {console.log("Having Fun.")};

Object.setPrototypeOf(B.prototype, A.prototype); // B.prototype points to A.prototype

let x = new B()

x.fun()

/* 
Does B have function fun ? : NO
we will check in B.prototype ? No
then one chain up to A.prototype ? Yes ====> A.prototype.fun = function fun() {console.log("Having Fun.")};
*/
