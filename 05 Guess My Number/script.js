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

// Next I select the number class that will hold the secret number, .number, and I update its textContent with the value generated in my secretNumber variable
document.querySelector('.number').textContent = secretNumber;

// Here I select the .check class on the button
// Then I add the .addEventListener method on the class
// And the event I'm listening for a click from the user "click"
// When that click happens I want to DEFINE the function that logs the .value entered within the .guess input field and logs it to the console
// This function will only be called when the event happens as I've passed it INTO the addEventListener method
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If there is NO guess, then print No Number to the console
  // Use the if/else block to account for all guesses
  // Too high, too low, bang on, no number
  // score-- will decrease the score variable's value and then displays the updated score to reflect the change

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!!!';
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

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess too high, bro!';
      score--;
      document.querySelector('.score').textContent = score;

      // When out of guesses
    } else {
      document.querySelector('.message').textContent = 'YOU LOSE, BRUV';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess too low, bro..';
      score--;
      document.querySelector('.score').textContent = score;

      // When out of guesses
    } else {
      document.querySelector('.message').textContent = 'YOU LOSE, BRUV';
      document.querySelector('.score').textContent = 0;
    }
  }
});
