'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    // 1000ms in 1 second
    // 60secs in 1 minute
    // 60mins in 1 hour
    // 24hrss in 1 day
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0); // zero-based
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);

  // If I need really advanced and/or precise time differentials, like AEST/AEDT, then I should use a FREE date library, like Moment.JS
};

const formatCurr = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCurr(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurr(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurr(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurr(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date & time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      // weekday: 'long',
    };

    // const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); // zero-based
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDate.push(new Date().toISOString());
    receiverAcc.movementsDate.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//
console.log(23 === 23.0);
//
//========================================
// Converting strings to Numbers
//========================================
//
// The Number object provides a Namespace to work off of
console.log(Number('23'));
console.log(+'23');
//
//
//========================================
// Parsing Number Values | Parse Integers
//========================================
//
// Parsing allows me to tell Javascript to automatically take the number values out of given strings, or Parse, them
// In order for this to work, the string needs to START with a number

console.log(Number.parseInt('30px'));
// The parseInt argument also takes a second argument, the Radix, which is the base numeric system we're using
console.log(Number.parseInt('e23', 10));
//
//========================================
// Parsing Number Values | Parse Floats
//========================================
//
// parseFloat is my go-to whenever I need to read a value out of a string
// I can instead use parseFloat to only grab the floating point number, or decimal number:
console.log(Number.parseFloat('2.5rem'));
//
// I can also use the Nunber object to check if any value is a number, or not, to begin with:

// Checking if NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is a Number
// This is my go-to method of checking
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));
//
//
//========================================
// Math and Rounding
//========================================
//
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(Math.max(5, 18, 23, 11, 2));
//
// I can use Javascript's in-built math features to calculate, for instance, the radius of a circle with 10px:
console.log(Math.PI * Number.parseFloat('10px') ** 2);
//

console.log(Math.trunc(Math.random() * 6) + 1);
// But I can, and should, be using it to check whether something is a number or not
// Or in this case, cleaning upo the code for a random number generator in order to make it more dynamic
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));
//
// Rounding Integers
//========================================
//
// Rounding down
console.log(Math.floor(23.3)); // 23
//
// Rounding up
console.log(Math.ceil(23.3)); // 24
//
// Rounding decimals
//========================================
//
// I call the toFixed method on my number namespace and specify that I want it "fixed to 0 decimals places (aka a whole number)"
// toFixed always returns a STRING, not a number
//
console.log((2.7).toFixed(0)); // 3
//
// But if I specify 3 decimal places for example:
console.log((2.7).toFixed(3)); // 2.700
// And it can round off to the specified decimal place
// If I want to convert my string back into a number, I can use the urnary operator, "+"
console.log(+(2.345).toFixed(2)); // 2.35 as a NUMBER
// It's useful to remember that using the urnary oeprator, "+", is a quick and easy easy to convert a string to a number in Javascript
// It's particularly usful in cases where I get numeric values in string formatting methods, like "toFixed()""
// This new approach, "+", is cleaner and often more intiuitive than using the other methods like "parseInt()"", or "passFloat()", especially when I know that the format of the string is already a valid number to begin with
// Mainly it's handy becuse it's concise and performs the conversion in a straightforward manner without needing call additional functions resolting in overall cleaner, SHORTER, code
//
//========================================
// REGARDING NUMBERS IN JAVASCRIPT
//========================================
//
// It's important for me to remember that in Javascript, numbers are PRIMITIVE values
// AND PRIMITIVES DON'T HAVE METHODS
// So BTS, JS does "boxing" where JS transforms the number into a "number object"
// Then when that "boxing" operation is finished, JS converts it back into a Primitive!
//
//
//========================================
// The Remainder Operator
//========================================
//
// The remainer operator returns the remainder of any divison:
console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

// I'll probably end up checking if a lot of numbers are even or odds in my JS career
// A number that is even is divisible by 2
// Which means if I divide that number by 2, the remainder is 0
console.log(6 % 2); // 0
console.log(6 / 2);
// And this is where the use of the "%" remaindeer operator comes in handy as a kind of.. simple boolean checkgate

const isEven = n => (n & 1) === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(24));

// Ok, let's say I now want to select ALL of the rows of my movements and when I click the label, it will change the background colour of EVERY SECOND ROW to red:

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (
    element,
    index
  ) {
    // 0, 2, 4, 6
    if (index % 2 === 0) element.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (index % 3 === 0) element.style.backgroundColor = 'blue';
  });
});
// The remainder operator is useful when it comes to the implementation of iterating something every Nth time
//
//
//========================================
// DISCRETE MATHEMATICS CATCH UP LOL
//========================================
// In Discrete Mathemetics our teacher used an analogy comparing the % to an old-school clock with just an hour hand:
// For example, take the equation (number1 % number2)
// number1 represents how many hours will pass
// number2 represents how many hours are displayed on a clock (base 12)
// Since a typical clock displays 12 hours, if I was to use the " % " operator, everytime number1 lands on 12, it would reset to 0
// So, if number1 = number2, OR number1 is divisible by number2, the result will be 0!
// number1 = number2 || (number1 / number2) = 0 ?
// So I imagine a huge planet that looks like a clock
// It has a 12hr day, 3 hour day, 86hr day, etc
// Once the "full hours" have passed it's a new day
// So if I had a 12 hr day, then hour 12 would reset the counter to 0
//========================================
// So in (n % x),
// n represents the hour hand
// x represents how many hours are displayed on the clock
// Next in (n % 6), would mean a 6 hour clock, OR a 6 hour day (so can NEVER RETURN MORE THAN 5 - >= 5), since 6 would be the 0 remainding hours in the day, OR hour 0
// Again in (n % 9), this would mean a 9 hour clock OR a 9 hour day (can NEVER RETURN MORE THAN 8 - >= 8
// The " % " operatoris only concerned with which number the hand lands on after n hours
// So, again, since typical clocks show 12 hours:
// Have 12 hours passed? Reset the time back to 0
// Have 24 hours passed? There may have been 2 full rotations, but the timer still resets to 0 TWICE since we landed on 12 TWICE
// What about 27 hours? Still, 2 full rotations, or resets, but then then the hand lands on 3, so we get the remainder of 3!
//========================================
// 1 hour on a 12 hour clock =  1 = (1 % 12)
// 6 hours on a 12 hr clock = 6 = (6 % 12)
// 18 hours on a 12 hr clock = 6 = (18 % 12)
// And on a 3 hour clock:
// 1 % 3 = 1
// 2 % 3 = 2
// 3 % 3 = 0
// 4 % 3 = 1
// 5 % 3 = 2
// 6 % 3 = 0
//========================================
// 84,495 hour clock:
// 4,000 % 84,495 = 4,000
// 84,497 % 84,495 = 2
// the % operator is also called modulo or the mod operator, so in (n % x) I say "n mod x" for short
// "we are modulating n about x"
// For example, with (6 % 9), I would refer to that as 6 mod 9
//
//
//========================================
// Numeric Seperators
//========================================
//
// Let's say I wanted to represent a HUGE number, like the diameter of our a solar system:
// 287, 460, 000, 000
// I can use underscores as numeric seperators to make code much easier to read, format, and understand
//
const diameter = 287_460_000_000;
console.log(diameter);
//
// I can even imply and/or convery meaning using the underscores to break apart dollars from cents, for instance
const price = 345_99;
const transferFee1 = 15_00;
const transferFee2 = 1_500;
console.log(price);
// It doesn't matter where I place my seperators, so long as they are nested within numbers
// I can also never do two underscores in a row
const PI = 3.14_15;
console.log(PI);
// I should NEVER use underscores in, say, a string received from an API
//
//========================================
// BigInt
//========================================
//
// BigInt is a special type of Primitive data type introduced in 2020
// I can use BigInt to store the value of any number I want, no matter how large
//
console.log(7564367235326458326547834295673239878567989n);
// I can use a constructor function with BigInt as well, but I should use smaller numbers when using the constructor
//
console.log(BigInt(4824256));
//
// Operations
//========================================
console.log(10000n + 10000n);
// but I can't use BigInts with regular numbers in Javascript
//
const huge = 7564367235326458326547834295673239878567989;
const num = 23;
//
//
//========================================
// Creating Dates
//========================================
//
// I can use Date() to parse the current date
// const now = new Date();
// console.log(now);

// I can also parse a string containing the date into the method:
console.log(new Date('May 07 2020 22:50:55'));
// I can even get the exact day of the week!
console.log(new Date('December 24, 2013'));
// But it's generally NOT a good idea to prase strings like this.. UNLESS the string was created by Javascript itself (like as an abstraction)
console.log(new Date(account1.movementsDates[0]));
//
// Working with Dates
//========================================
//
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// I can even get the exact amount of time (in ms) that's elapsed since the specified date:
// console.log(future.getTime()); // 2142217380000
// Now I can reverse it:
// console.log(new Date(2142217380000));
//
// There's also a special method I can use just for retrieving the current time-stamp:
// console.log(Date.now());
//
//
//========================================
// Operations with Dates
//========================================
//
// Let's create a function that returns two dates and then calculates the number of days that have elapsed between the two specified dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const testNum = 3884764.23;
console.log(new Intl.NumberFormat('en-US').format(testNum));
