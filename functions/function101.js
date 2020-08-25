let greetUser = function () {
  console.log("Welcome User");
};

greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);
let value1 = square(10);

console.log(value);
console.log(value1);

let conversion = function (fahrenheit) {
  let res = (fahrenheit - 32) * (5 / 9);
  return res;
};

let val = conversion(68);

console.log(val);
