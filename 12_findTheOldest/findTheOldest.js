const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const people2 = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const people3 = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (array) {
  const date = new Date();
  const year = date.getUTCFullYear();

  return array.reduce((oldest, current) => {
    const oldestAge = (oldest.yearOfDeath || Number(year)) - oldest.yearOfBirth;
    const currentAge =
      (current.yearOfDeath || Number(year)) - current.yearOfBirth;

    if (oldestAge < currentAge) {
      return current;
    } else {
      return oldest;
    }
  }, array[0]);
};

console.log(findTheOldest(people));
console.log(findTheOldest(people2));
console.log(findTheOldest(people3));

// Do not edit below this line
module.exports = findTheOldest;
