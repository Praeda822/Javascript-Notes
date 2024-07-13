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

//
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// First I want to display the application itself in the list
// Then I want to display each value from the numbered account's corresponding movements array using forEach
// It's best practice to have my data work by being passed directly into a function instead of having global variables floating around
// First, I should empty the containerMovements by using innerHTML as a setter

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // Use slice to create a shallow copy and chain sort method onto it
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (element, index) {
    const type = element > 0 ? 'deposit' : 'withdrawal';

    const html = `        
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__value">${element}</div>
  </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, element) => acc + element, 0);
  labelBalance.textContent = `$${acc.balance}AUD`;
};

/**
 * Calculates and displays the summary of the account movements.
 *
 * @param {object} acc - The account object.
 */
/**
 * Calculates and displays the summary of the account movements.
 *
 * @param {object} acc - The account object.
 */
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(function (element) {
      return element > 0;
    })
    .reduce(function (accumulator, element) {
      return accumulator + element;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outgoing = acc.movements
    .filter(function (element) {
      return element < 0;
    })
    .reduce(function (accumulator, element) {
      return accumulator + element;
    }, 0);
  labelSumOut.textContent = `${Math.abs(outgoing)}€`;

  /**
   * Calculates the total interest earned on positive movements in the account.
   *
   * @type {number}
   */
  const interest = acc.movements
    .filter(function (element) {
      return element > 0;
    })
    .map(function (element) {
      return (element * acc.interestRate) / 100;
    })
    .filter(function (element, index, array) {
      console.log(array);
      return element >= 1;
    })
    .reduce(function (accumulator, element) {
      return accumulator + element;
    }, 0);
  labelSumInterest.textContent = `${interest}€`;
};

//
//
const user = 'Steven Thomas Williams'; //stw

const createUserNames = function (accounts) {
  accounts.forEach(function (element) {
    element.username = element.owner
      .toLowerCase()
      .split(' ')

      // Convert to arrow function
      // .map(function (element) {
      //   return element[0];
      // })
      // .join();
      .map(element => element[0])
      .join('');
  });
};
createUserNames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Login Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form submission
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome msg
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    } `;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
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
    // Transferring money logic
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // Delete Account
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

// const newBalance = movements.reduce(function (accumulator, element) {
//   console.log(`Iteration ${accumulator}: ${element}`);
//   return accumulator + element;
// }, 0);
// console.log(newBalance);

// Convert to arrow function
const newBalance = movements.reduce(
  (accumulator, element) => accumulator + element
);
console.log(newBalance);

let newBalance2 = 0;
for (const element of movements) newBalance2 += element;
console.log(newBalance2);

// Maximum Value
const max = movements.reduce((accumulator, element) =>
  Math.max(accumulator, element)
);
console.log(max); // 3000

const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(function (element) {
    return element > 0;
  })
  .map(function (element) {
    return element * eurToUsd;
  })
  .reduce(function (accumulator, element) {
    return accumulator + element;
  }, 0);
console.log(totalDepositsUSD);

// Loop over array to retrieve an element
// the find() method will not return the entire array
// Instead only the first element that satisfies the condition is returned (becomes TRUE)
const firstWithdrawal = movements.find(function (element) {
  return element < 0;
});
// console.log(movements); // array
// console.log(firstWithdrawal); // -400

// console.log(accounts);

// Creating a user account
const account = accounts.find(function (element) {
  return element.owner === 'Jessica Davis';
});
// console.log(account);

// querySelectorAll() returns a NodeList, which is LIKE an array, but isn't a real array and so doesn't have moth of the array methods such as map() and reduce()
// So, if I wanted to use array methods on the NodeList, I would need to convert my NodeList INTO an array, again, using Array.from()!
// Then I pass the map() method to my movementsUI to apply my textContent.replace() function to each element of my newly created array that was originally the NodeList

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('💲', ''))
  );
  console.log(movementsUI);
});

// Another way of accessing my movements UI array, but it's a bit dodgy..
// movementsUI2 = [
//  ...document.querySelectorAll(document.querySelectorAll('.movements__value')),
// ];
