const getTip = (amount) => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw Error("Argument Must be a number");
  }
};

try {
  const result = getTip(true);
  console.log(result);
} catch (e) {
  console.log("Catch block running");
}
