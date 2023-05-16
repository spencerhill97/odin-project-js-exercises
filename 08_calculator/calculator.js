const add = function (num1, num2) {
  return Number(num1) + Number(num2);
};

const subtract = function (num1, num2) {
  return Number(num1) - Number(num2);
};

const sum = function (arr) {
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let index = 1;
  let result = 1;

  while (index <= num) {
    result *= index;
    index++;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
