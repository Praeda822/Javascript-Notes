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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (element, index) {
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

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(
    (accumulator, element) => accumulator + element,
    0
  );
  labelBalance.textContent = `${balance} EUR`;
};

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
    // Display movements
    displayMovements(currentAccount.movements);
    // Display balance
    calcDisplayBalance(currentAccount.movements);
    // Display summary
    calcDisplaySummary(currentAccount);
  }
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
console.log(movements); // array
console.log(firstWithdrawal); // -400

console.log(accounts);

// Creating a user account
const account = accounts.find(function (element) {
  return element.owner === 'Jessica Davis';
});
console.log(account);
