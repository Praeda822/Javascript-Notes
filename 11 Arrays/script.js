'use strict';

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
checkDogs(dogsJulia, dogsKate);
