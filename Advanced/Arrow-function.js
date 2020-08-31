const square = (num) => num * num;

const squareLong = (num) => {
  return num * num;
};

console.log(square(5));

const people = [
  {
    name: "Shreyas",
    age: 23,
  },
  {
    name: "Ketan",
    age: 23,
  },
  {
    name: "Tesla",
    age: 47,
  },
];

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const equal = people.find((person) => person.age === 47);
console.log(equal.name);
