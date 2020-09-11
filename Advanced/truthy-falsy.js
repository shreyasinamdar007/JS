const products = ["Some Item"];
const product = products[0];

//Truthy - Values that boolean context
//Falsy - value that resolve to boolean context
//Falsy value - false, 0, empty string, null, NaN

if (products) {
  console.log("Product Found");
} else {
  console.log("Product Not Found");
}
