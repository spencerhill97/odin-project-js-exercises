const convertToCelsius = function (temp) {
  const result = (Number(temp) - 32) * (5 / 9);
  return Math.floor(result) === result ? result : Number(result.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  const result = Number(temp) * (9 / 5) + 32;
  return Math.floor(result) === result ? result : Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
