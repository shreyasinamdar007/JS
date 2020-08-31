// const myAge = 23;
// const message = myAge >= 18 ? "You can Vote" : "You cannot vote";
// console.log(message);

const myAge = 27;
const ShowPage = () => {
  console.log("Showing the page");
};

const showErrPage = () => {
  console.log("Showing error Page");
};

myAge >= 21 ? ShowPage() : showErrPage();

const team = ["Lebron", "Kobe", "Go", "Noob", "Bot"];
console.log(team.length >= 4 ? "Team Size is too much" : "Go ahead and play");
