console.log(""+0)
console.log(""+(-0 ))



function getSign(x) {
  if (Object.is(x, -0)) {return -1;}  // explicitly catch -0
  else {return Math.sign(x);}
}

console.log(getSign(-0));  // -1
console.log(getSign(0));   // 0
console.log(getSign(5));   // 1
console.log(getSign(-7)); // -1



