"use strict";

//========================================
// function logger() {
//   console.log("My name is Pat");
// }

// logger();

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
//========================================

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1994);
// console.log(age1);

// const age2 = calcAge2(1994);

// console.log(age1, age2);

//========================================
//Arrow functions
const calcAge = (birthyear) => 2037 - birthyear;

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1994, "Pat"));
console.log(yearsUntilRetirement(1958, "Dad"));
//ARROW FUNCTION CAN'T USE 'this' KEYWORD

//========================================

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
//Create a function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//========================================
//Arrays
//========================================
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

//Arrays start at 0
console.log(friends[0]);
console.log(friends[2]);

//.length gives me the Length of an array
console.log(friends.length);
console.log(friends[friends.length - 1]);

//Arrays are mutable
//I can change the value of an array, ijn this case I change the value of the 3rd element in the array
friends[2] = "Jay";
console.log(friends);

//Arrays can hold different data types
const firstName = "Pat";
const pat = [firstName, "Hernandez", 2021 - 1994, "Student", friends];
console.log(pat);

const testYears = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(testYears[0]);
const age2 = calcAge(testYears[1]);
const age3 = calcAge(testYears[testYears.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(testYears[0]),
  calcAge(testYears[1]),
  calcAge(testYears[testYears.length - 1]),
];
console.log(ages);

//========================================
//Array Methods
//========================================

//.push adds to the end of the array, and also returns the new length of the array
const newLength = friends.push("Pat");
console.log(friends);
console.log(newLength);

//.unshift adds to the beginning of the array, and also returns the new length of the array
friends.unshift("John");
console.log(friends);

//.pop removes the last element of the array, and also returns the removed element
const popped = friends.pop();
console.log(friends);
console.log(popped);

//.shift removes the first element of the array, and also returns the removed element
friends.shift();
console.log(friends);

//.indexOf returns the index of the element in the array
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

//.includes returns a boolean value (true/false) if the element is in the array
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

//Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

//Next, create an array called bills containing the test data below.
//TEST DATA: 125, 555, 44

//Create an array called tips containing the tip value for each bill, calculated from the calcTip function.
//MY SOLUTION:
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(125));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, totals);

//========================================
//Objects
//========================================
