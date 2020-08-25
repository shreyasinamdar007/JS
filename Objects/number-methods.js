let num = 179.214;

console.log(num.toFixed(2));
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

let min = 1;
let max = 10;
let randomnum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomnum);

//Challenge
//1 - 5 true if correct false if wrong

let make = function (guess) {
  let min = 1;
  let max = 10;
  let randomnum = Math.floor(Math.random() * (max - min + 1)) + min;

  return guess === randomnum;
};

console.log(make(1));
