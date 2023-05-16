const leapYears = function (number) {
  const result = Number(number);
  return result % 400 === 0 || (result % 4 === 0 && result % 100 !== 0)
    ? true
    : false;
};

// Do not edit below this line
module.exports = leapYears;
