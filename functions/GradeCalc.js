let result = function (Marks, Total) {
  if (typeof Marks === "number" && typeof Total === "number") {
    let percent = (Marks / Total) * 100;
    if (percent >= 90) {
      console.log(`You got a A(${percent}%)`);
    } else if (percent >= 80 && percent < 90) {
      console.log(`You got a B(${percent}%)`);
    } else if (percent >= 70 && percent < 80) {
      console.log(`You got a C(${percent}%)`);
    } else if (percent >= 60 && percent < 70) {
      console.log(`You got a D(${percent}%)`);
    } else {
      console.log(`You got a F(${percent}%)`);
    }
  } else {
    throw Error("Please enter a number");
  }
};
try {
  const grade = result("True", "False");
  console.log(grade);
} catch (e) {
  console.log(e.message);
}
