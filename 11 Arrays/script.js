'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Patrick Kelly',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Lauren Marshall',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

//========================================
// Simple Array Methods
//========================================
//
// Methods are just functions I can call on Objects
// Which basically makes them functions that are atatched to Objects
// Therefore, since Arrays have their own methods, then Arrays are Objects, too (IN JS), with their own attached functions (methods)

// Slice
//========================================

// Slice lets me extract any part of the array, without touching the original array, and returns a NEW array made of only the extracted parts
// slice() arguments are just like the string method arguments: (index, end)
// So here we start at C (2), and my new array only includes c, d, e
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // c d e
// The end parameter doesn;'t get included in the output | end - index
console.log(arr.slice(2, 4)); // c d
// I can define negative parametrs to start from the end of an array, just like with strings
console.log(arr.slice(-2)); // d e
// I can combine both pos/neg parameters
console.log(arr.slice(1, -2)); // b c

// I can also use slice to simply create a shallow copy of the array
console.log(arr.slice());
// Exactly the same as slice:
console.log([...arr]);

// I can use either spread operator or slice, as long as Im consistent with it
// Slice is useful when I want to chain multiple methods together, though
//
// Splice
//========================================
//
// Splice works almost indentically to Slice
// EXCEPT, Splice MUTATES (changes) the ORIGINAL ARRAY
// The argument parameters are (index, deleteValue)
// console.log(arr.splice(2)); // c d e
// Extracted elements are GONE from the original array
console.log(arr); // a b
arr.splice(-1);
console.log(arr); // a
//
// Reverse
//========================================
//
// Pretty self-explanatory
// EXCEPT, reverse DOES MUTATE THE OG ARRAY
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);
//
// Concat
//========================================
//
// Concat COMBINES two arrays together and outputs ONE array
// Concat does NOT mutate the OG array
const letters = arr.concat(arr2);
console.log(letters);
// Exactly the same
console.log([...arr, ...arr2]);
//
// Join
//========================================
//
// The join method will join all of the elements in an array together by the specified argument value
console.log(letters.join(' - '));
//
//
//
//========================================
// The new at Method
//========================================
//
// the at Method lets me specify an element explicitly, so no more mucking about with the index values
const newArr = [23, 11, 64];
console.log(newArr[0]); // 23
// Same as above, just more modern looking
console.log(newArr.at(0));
// The at method is useful, for instance, when I don't know the length of an array
// Getting the last element of an array:
console.log(newArr[newArr.length - 1]); // 64
console.log(newArr.slice(-1)[0]); // 64
// Using at, I don't need to specify an index value or length -1
console.log(newArr.at(-1)); // 64
//
//
//
//========================================
// Looping Arrays: forEach
//========================================
//

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The continue and break statement DO NOT work in a forEach loop
// So I would use forOf loops when I want to be able to break out of a loop early, or without looping over the entire object

// When I use entries(), the first value is the index
// The second value is the array element
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('----- FOREACH ----- ');

// I use callback functions to tell another Higher-order function exactly what it should do
// forEach loops ALWAYS have the 3 arguments: element, index, array
// AND ALWAYS IN THAT ORDER
movements.forEach(function (e, i, arr) {
  if (e > 0) {
    console.log(`Movement ${i + 1}: You deposited ${e}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(e)}`);
  }
});
// 0: function(200)
// 1: function(450)

//
//
//
//========================================
// forEach With Maps and Sets
//========================================
//
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value} `);
});

// Sets don't have keys or indexes
// So the value & key are the same
const currenciesUnique = new Set(['USD', 'GBP', 'AUD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value} `);
});

//
//
//========================================
// CHALLENGE 1
//========================================
//
// Create a function, 'checkDogs', which accepts 2 arrays of dogs ages ('dogsJulia' and 'dogsKate'), and does the following:
//
// 1.
// Julia found out that the owners of the FIRST and LAST TWO dogs actually have cats, not dogs! Create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's bad practice to mutate function parameters)

// 2.
// Create an array with both Julia's (corrected) and Kate's data

// 3.
// For each remaining dog, log to the console whether it's an adult ( "Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")

// 4.
// Run the function for both test data sets

// TEST DATA 1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// TEST DATA 2
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

// MY CODE:

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaFixed = dogsJulia.slice(1, -2);
  console.log(dogsJuliaFixed);
  const dogsTotal = dogsJuliaFixed.concat(dogsKate);
  console.log(dogsTotal);
  dogsTotal.forEach(function (element, index) {
    element >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${element} years old `
        )
      : console.log(`Dog number ${index + 1} is still a puppy`);
  });
};
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// Well done, mate
// Legit, well done
//
//
//========================================
// Data Transformations: map(), filter(), reduce()
//========================================
//
//
// map()
//========================================
// the map() method accepts a callback and applies that function to each element of an array, then returns a NEW array
// The map() method is JUST LIKE the forEach method
// map() is useful when I want to return a NEW ARRAY, unlike forEach which will mutate the OG array

// const eurToUSD = 1.1;
// const conversionUSD = movements.map(function (element) {
//   return element * eurToUSD;
// });

// Convert it to an arrow function
const eurToUSD = 1.1;
const conversionUSD = movements.map(element => element * eurToUSD);
console.log(movements);
console.log(conversionUSD);

// I pass in my callback function, square, and get a new array with all of the OG arrays squared values without having mutatd the OG array

const myNum = [1, 2, 3, 4, 5];
const squares = myNum.map(square);
console.log(squares);
function square(element) {
  return Math.pow(element, 2);
}
//
//
const students = ['spongebob', 'patrick', 'squidward', 'Sandy'];
const studentsUpper = students.map(upperCase);
console.log(studentsUpper);

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}
//
//

//
// filter()
//========================================
// the filter() method will create a new array by filtering out elements
// I should be using it to check for either a boolean value, or at least a truthy/falsy one
// Another BIG advantage of using these methods instead of for loops is because I can chain the methods together back-to-back

let lozNum = [1, 2, 3, 4, 5, 6, 7];
let lozEvenNum = lozNum.filter(isEven);
let lozOddNum = lozNum.filter(isOdd);

console.log(lozEvenNum);
function isEven(element) {
  return element % 2 === 0;
}

console.log(lozOddNum);
function isOdd(element) {
  return element % 2 !== 0;
}
//
//
// Using filter() to return a new array by passing in a callback function
const newAges = [16, 17, 18, 18, 19, 20, 60];
const newAdults = newAges.filter(isAdult);
const newChild = newAges.filter(isChild);

console.log(newAdults);
console.log(newChild);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}
//
//
const deposits = movements.filter(function (element) {
  return element > 0;
});

const withdrawals = movements.filter(element => element < 0);
console.log(movements);
console.log(deposits);
console.log(withdrawals);
//
//
//
// reduce()
//========================================
// The reduce method will reduce the elements of an array to a single value, e.g. adding all elements together
// reduce has two arguments, the accumulator (acc) and the current index position (i)
// Don't forget we start at ZERO!!
// Each time reduce iterates over an array, the element value is added to the accumulator, and so on, and so on, until  I have the sum total of all the elements at the end of the loop
// Think of like a shopping cart, with an array that holds all of the prices
// Since it works like the forEach loop, I pass in a callback function
//
const myPrices = [5, 30, 10, 25, 15, 20];
const myTotalPrices = myPrices.reduce(mySum);

console.log(`$${myTotalPrices.toFixed(2)}`);
// $105.00

function mySum(accumulator, element) {
  return accumulator + element;
}
//
//
const myGrades = [75, 50, 90, 80, 65, 95];
const myMax = myGrades.reduce(getMax);
const myMin = myGrades.reduce(getMin);

console.log(myMax);
console.log(myMin);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}
//
//
// Working again with my movements array
// Don't forget to specify to start from zero

// const newBalance = movements.reduce(function (accumulator, element) {
//   console.log(`Iteration ${accumulator}: ${element}`);
//   return accumulator + element;
// }, 0);
// console.log(newBalance);

//========================================
// CHALLENGE 2
//========================================
//
// Create a function, 'calcAverageHumanAge', which accepts an array of dog ages ('dogAges'), and does the follwing things in order:
//
// 1.
// Calculate the dog age in human years using the following formula:
// If the dog is <= 2 years old, then humanAge = 2 * dogAge.
// If the dog is > 2 years old, then humanAge = 16 + dogage * 4
//
// 2.
// Exclude all dogs that are less than 18 human years old
//
// 3.
// Calculate the average human age of all adult dogs
//

// MY CODE:
// Fucking GARBAGE CUNT
// function calcHumanAge() {
//   const humanAge = 0;
//   let dogAges = dogsArr1.concat(dogsArr2).filter(function (element) {
//     element < humanAge === 18;
//   });
//   console.log(dogAges);
//   dogAges.forEach(function (dogAge) {
//     dogAge <= 2 ? (humanAge = 2 * dogAge) : (humanAge = 16 + dogAge * 4);
//     return humanAge;
//   });

//   const average = function (dogAges) {
//     const sum = dogAges.reduce(function (acc, curr) {
//       return acc + curr;
//     }, 0);
//     return sum / dogAges.length;
//   };
//   console.log(average());
// }

// TEST DATA:
const dogsArr1 = [5, 2, 4, 1, 15, 8, 3];
const dogsArr2 = [16, 6, 10, 5, 5, 1, 4];

function calcHumanAge(dogAges) {
  return dogAges
    .map(function (dogAge) {
      return dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
    })
    .filter(function (humanAge) {
      return humanAge >= 18;
    })
    .reduce(function (accumulator, element, index, arr) {
      return accumulator + element / arr.length;
    }, 0);
}
console.log(
  'Average human age for dogsArr1:',
  calcHumanAge([5, 2, 4, 1, 15, 8, 3])
);
console.log(
  'Average human age for dogsArr2:',
  calcHumanAge([16, 6, 10, 5, 5, 1, 4])
);
console.log(
  'Average human age for both arrays combined:',
  calcHumanAge(dogsArr1.concat(dogsArr2))
);
//
//
//========================================
// some and every
//========================================
//
console.log(movements);
// Checks for EQUALITY
console.log(movements.includes(-130));
// SOME: Checks for CONDITION
console.log(movements.some(mov => mov === -130));

// I want to check for any positive movement (deposits) within the array
// So any deposits greater than 0
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
// every only returns true if ALL of the elements in the array satisfy the condition I pass in
// if EVERY element passes the test in my callback function, then ONLY the every method will return true
console.log(movements.every(mov => mov > 0));

// Seperate callbacks
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
//
//
//========================================
// flat and flatMap Methods
//========================================
//
// flat()
//========================================
// I can use the flat method to basically COMBINE all the elements of a 2D array, and join them together into ONE array
// So flat removes the nested arrays, and flattens the array overall
const lozArr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(lozArr.flat());

// But the flat method only goes ONE LEVEL DEEP when flattening
// But with flat I can actually specify how many levels of nesting deep I want to flatten
const lozArrDeep = [[[1, 2, 3], [4, 5, 6], 7, 8]];
console.log(lozArrDeep.flat(2));

// So let's say the bank wants to count up ALL the movements across ALL bank accounts:

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// But I can shorten all that horseshit down to something much more clean and more pleasing to look at:
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 17840
//
// flatMap()
//========================================
//
// flatmap essentially combines both the flat method AND the map method
// The only issue with using flatMap() is that IT ONLY GOES ONE LEVEL DEEP
// So it's a good use-case for single-level nesting, but not multiple
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 17840
//
//
//========================================
// Sorting Arrays
//========================================
//
// Sorting strings
//========================================
// sort() MUTATES THE OG ARRAY
// Organises my strings into alphabetical order
const owners = ['Patrick', 'Lauren', 'Julia', 'David'];
console.log(owners.sort());

// Sorting numbers
//========================================
//
console.log(movements);
// This is all disgusting here because the sort method only works properly when sorting STRINGS
// So negative ( - ) would come first, then -1, -4, -6
// But I can rectify this by using a compare callback function that has two arguments:
// a = current value
// b = next value
// If I return < 0 then A preceeds B (keep order)
// If I return > 0 then B preceeds A (switch order)
// Ascending:
movements.sort(function (a, b) {
  a - b;
});
console.log(movements);

// Descending:
movements.sort(function (a, b) {
  b - a;
});
console.log(movements);
//
//
//========================================
// More ways of Creating and Filling Arrays
//========================================
//
const patArr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
//
// Empty Arrays + fill method
//========================================
// Passing this array constructor function with only ONE argument means I end up with an empty array that is 7 elements long
// I also can't do anything with this empty array, like using the map method on it
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// BUT I can use the fill() method!
// and the fill() method MUTATES THE OG ARRAY
// x.fill(1);
// I can also specify where I want the array to start being filled from, in this case at index 3
// Since fill() works just like splice(), I can also define an END parameter
// and just like with slice, it leaves the rest of the array untouched after ending at index 5
x.fill(1, 3, 5);
console.log(x);

patArr.fill(23, 2, 6);
console.log(patArr);
//
//========================================
// Array.from
//========================================
//
// Creating arrays programmatically
//========================================
//
// My array here is a constructor function (just like new Array above), and on this function I can call the from() method
// First I can pass in an object with the length property
// And then the second argument is a MAPPING function, which is EXACTLY like the callback function I use on the map() method
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// Since I'm not using the element parameter here, I can remove it and denote it with an underscore
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Generate an array with 100 random dice rolls!
const random = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);
console.log(random);
// EZZZZZZ MATE

// Generate ANOTHER array with 100 random numbers!
const random100 = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 100) + 1
);
console.log(random100);
// PIECE OF...cake
//
//
//========================================
// Which array method to sue?
//========================================
//
//========================================
// Mutate the OG Array
//========================================
//
// To mutate an original array, I can use the following methods:
// To add to the OG Array:
// .push() (end), .unshift() (start)
//
// To remove from the OG Array:
// .pop() (end), .shift() (start), .splice() (any)
//
// To organise the OG Array:
// .reverse(), .sort(), .fill()
//
//
//========================================
// Create a new array!
//========================================
//
// To create a new array I can use the following methods:
// To compute FROM the OG array:
// .map()
// .map() loops over the array OG array and returns a NEW array
//
// To filter an OG array using conditional(s):
// .filter()
//
// To take a PORTION of the OG array:
// .slice()
//
// To add the OG Array's content to (an)other:
// .concat()
//
// To flatten the OG array:
//  .flat(), .flatMap()
//
//
//========================================
// I Want: Array indexes/indexing
//========================================
//
// To index an array..
// Based on a Value: .indexOf()
//
// To index an array..
// Based on a test condition: .findIndex()
// The main difference between these two methods is that .findIndex() can basically search through the array absed entirely upon a specified test condition that I provide in the CALLBACK FUNCTION
//
//
//========================================
// I want: an Array Element
//========================================
//
// I want an array element..
// Based on a test condition: .find()
// The test condition is ALSO defined within the callback function
//
//
//========================================
// I want: Does an Array Include
//========================================
//
// I want to know if an array includes..
// Based on a single value: .includes()
//
// I want to know if an array includes..
// Based on a test condition: .some(), .every()
// .some() will return true if at LEAST ONE of the elements in the array satisfies the condition specified within the callback function
// Whereas .every() ONLY returns true if ALL of the elements in the array satisfy the condition specified within the callback function
// All 3 of these methods return BOOLEAN VALUES
// Also typically used in if/else statements
//
//
//========================================
// I want: A New String
//========================================
//
// I want to know if a new string in an array includes..
// Based on seperator string: .join()
//
//
//========================================
// I want: To transform an Array Value
//========================================
//
// I want to transform to value..
// Based on a/the accumulator .reduce()
// Reduce boils down an array to a single value of any type:
// Number, string, boolean, new array/object
// .reduce() also provides me with the following 3 parameters: (element, index, array)
//
//========================================
// I want: To just loop over an Array!
//========================================
//
// I want to just loop over an array WITHOUT creating a new value..
// Based on a callback: .forEach()
// forEach() does NOT create a new array, it only loops over the specified array
