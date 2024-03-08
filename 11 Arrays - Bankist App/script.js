'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
