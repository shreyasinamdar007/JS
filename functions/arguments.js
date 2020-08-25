let add = function (a, b) {
  return a + b;
};

let result = add(10, 1);
console.log(result);

let getScoreText = function (name = "Anonymous", score = 0) {
  return "Name:" + name + " Score:" + score;
};

let scoreText = getScoreText("Ramesh");
console.log(scoreText);

//challenge area

let tip = function (Total, Tip = 0.2) {
  return `The ${Tip * 100}% tip on $${Total} would be $${Total * Tip}!!`;
};

let Tips = tip(400);
console.log(Tips);

//Template string
let name = "Jen";
console.log(`Welcome to the Jungle ${name}!!`);
