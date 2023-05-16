const removeFromArray = function (...args) {
  return args[0].filter((num) => !args.slice(1).includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
