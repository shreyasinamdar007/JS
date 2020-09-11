const Hangman = function (Word, Guesses) {
  this.Word = Word;
  this.Guesses = Guesses;
};

const Game = new Hangman("California", 4);
console.log(Game.Guesses);

const Game2 = new Hangman("Texas", 2);
console.log(Game2.Word);
