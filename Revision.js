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

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
const scoreDolphins = calcAverage(44, 23, 71);

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
checkWinner(scoreDolphins, scoreKoalas);

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
