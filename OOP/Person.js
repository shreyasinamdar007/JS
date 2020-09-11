//Prototypal Inheritance

const Person = function (firstName, lastName, Age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.Age = Age;
  this.likes = likes;
};

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.Age}`;
  this.likes.forEach((like) => {
    bio = bio + ` ${this.firstName} likes ${like}.`;
  });
  return bio;
};

Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};

const me = new Person("Shreyas", "Inamdar", 23, ["Hacking", "Investing"]);
me.setName("Alexis Sanchez");
console.log(me.getBio());

const person2 = new Person("Tom", "Clancy", 20);
console.log(person2.getBio());
