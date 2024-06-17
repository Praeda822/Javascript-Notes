'use strict';

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

// I can use Object.freeze() to make objects immutable
// Object.freeze() only freezes the FIRST level of the object, so I can still mutate the object's values from INSIDE the object

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = user => spendingLimits?.[user] ?? 0;
// let lim;
// if (spendingLimits[user]) {
//   lim = spendingLimits[user];
// } else {
//   lim = 0;
// }
// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
// const limit = getLimit(user);

// Pure Function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(cleanUser)
    ? // budget.push({ value: -value, description: description, user: user });

      // budget.push({ value: -value, description, user: cleanUser });

      [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  budget,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log('I AM THE NEW BUDGETS', newBudget1, newBudget2, newBudget3);

const checkExpenses = function () {
  // let lim;
  // if (spendingLimits[entry.user]) {
  //   lim = spendingLimits[entry.user];
  // } else {
  //   lim = 0;
  // }
  // const limit = spendingLimits?.[entry.user] ?? 0;
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();

console.log(budget);

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit
        ? (output += `${entry.description.slice(-2)} /`)
        : ''; // Emojis are 2 chars
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);

logBigExpenses(500);
