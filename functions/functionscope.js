let conversion = function (fahrenheit) {
    let res = (fahrenheit - 32) * (5 / 9);
    return res;
  };
  
  let val = conversion(68);
  
  console.log(val);
  