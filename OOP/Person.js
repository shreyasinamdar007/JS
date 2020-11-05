//Prototypal Inheritance
//Syntactical Sugar
class Person {
  constructor(firstName, lastName, Age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.Age}`;
    
    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`;
    });
    return bio;
  }
  set fullName(fullName) {  
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];

  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
    constructor(firstName, lastName, Age, Position, likes) {
      super(firstName, lastName, Age, likes);
      this.Position = Position
    }
    getBio() {
      //Andrew is Software Developer
      return `${this.firstName} ${this.lastName} is ${this.Position}`;
    }
    getYearsLeft() {
      return 65 - this.Age;
    }
}

class Student extends Person {
  constructor(firstName, lastName, Grades, likes) {
    super(firstName, lastName, likes)
    this.Grades = Grades
  }

  upgradeGrade(change) {
    this.Grades += change
  }

  getStatus() {
    const status = this.Grades >= 70 ? `${this.firstName} ${this.lastName} is Passing` : `${this.firstName} ${this.lastName} is failing`;
    return status;
  }
}

const me = new Employee('Shreyas','Inamdar', 'Software Developer', [])
me.fullName = 'Clancy Turner';
console.log(me.getBio())


