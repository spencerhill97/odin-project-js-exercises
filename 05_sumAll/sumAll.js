const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  let starting = num1 > num2 ? num2 : num1;
  let ending = num1 > num2 ? num1 : num2;

  let result = 0;

  while (starting <= ending) {
    result += starting;
    starting++;
  }

  return result;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
