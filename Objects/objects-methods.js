let name = " Andrew";

console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

//includes method
let password = "abc123password088";
console.log(password.includes("password"));

//trim method
console.log(name.trim());

let isValid = function (pass) {
  if (pass.length > 8 && !pass.includes("password")) {
    return true;
  } else {
    return false;
  }
};

console.log(isValid("password1234"));
console.log(isValid("1234"));
console.log(isValid("raghu1234"));
