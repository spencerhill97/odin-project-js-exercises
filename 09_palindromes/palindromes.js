const palindromes = function (string) {
  const regex = /[a-z0-9]+/gi;
  const comparisonString = string.match(regex).join("").toLowerCase();
  return comparisonString === comparisonString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
