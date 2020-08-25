let result = function (Marks, Total) {
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
};

result(18, 20);
result(17, 20);
result(15, 20);
result(13, 20);
result(11, 20);
