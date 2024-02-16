'use strict';

//========================================
// 05 DOM Manipulation - Handling click events
//========================================

// This will output the contents of the element to the console
// Then I select the textContent property to only log the element's text property
// console.log(document.querySelector('.message').textContent);
// Here I've selected the same element and I am instead changing the content of the text to 'Correct Number!'
// document.querySelector('.message').textContent = 'Correct Number!';
// Then I re log the property of the message class to the console which reflects the change
// console.log(document.querySelector('.message').textContent);

// Here I've selected both the score as well as the number classes and changed them to new values using the textContent property
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// I select the guess class of the input element and give it a value of 23
// document.querySelector('.guess').value = 23;
// Here I've selected the input field, and log its content to the console, which is now 23, using the .value property
// console.log(document.querySelector('.guess').value);

//========================================
// 05 Implementing game logic
//========================================

// This is my secret number that is raaaandomly generated between 1 & 20
// Math.random is the random generator between 0-1
// Maath.trunc rounds it DOWN to the nearest decimal place
// But because we count from 0, I declare, basically:
// (Random Number Generator Between 0-1 * 20 + 1 )
const secretNumber = Math.trunc(Math.random() * 20 + 1);

// Global STATE variable to hold the score value
let score = 20;

// Global STATE variable to hold highscore value
let highscore = 0;

// DRY principle to reduce reused code to function call
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

// I select the number class that will hold the secret number, .number, and I update its textContent with the value generated in my secretNumber variable
document.querySelector('.number').textContent = secretNumber;

// This function will only be called when the event happens as I've passed it INTO the addEventListener method
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No number, bro!?');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!!!!');
    document.querySelector('.number').textContent = secretNumber;

    // When mucking around with styles, I need to pass the value as a string
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Again, when mucking around with styles, the value passed needs to be a string
    document.querySelector('.number').style.width = '30rem';

    // Updates highscore when guess is correct
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Your guess is too high, bro!'
          : 'Your guess is too low, bro..'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You LOSE, bro!!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
