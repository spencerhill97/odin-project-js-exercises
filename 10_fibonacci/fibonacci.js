const fibonacci = function (number) {
  if (isNaN(number) || number <= 0) {
    return "OOPS";
  } else if (Number(number) === 1) {
    return 1;
  }

  let index = 1;
  let prev = 0;
  let curr = 1;
  let result = 0;

  while (index < Number(number)) {
    result = prev + curr;
    prev = curr;
    curr = result;
    index++;
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
