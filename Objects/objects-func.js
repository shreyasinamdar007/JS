let book = {
  title: "Intelligent Investor",
  author: "Benjamin Graham",
  pages: 610,
};

let otherBook = {
  title: "Rich Dad Poor Dad",
  author: "Robert Kiyosaki",
  pages: 260,
};

let summary = function (book) {
  console.log(`${book.title} by ${book.author}`);
};

summary(book);
summary(otherBook);

let Convert = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit - 32) * (5 / 9),
  };
};

let temp = Convert(74);
console.log(temp);
