const add = function (a, b) {
  return arguments[1] + arguments[0];
};

console.log(add(11, 22, 33, 44));

const car = {
    color: 'Red',
    getSummary: function() {
        return `This `
    }
}