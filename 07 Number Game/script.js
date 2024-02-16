'use strict';

// Selecting state elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Define the variables as globally scoped
// Then redefine them within the init function
let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  // Array to hold total scores for each player
  scores = [0, 0];
  // Variable for current score increments
  currentScore = 0;
  // Variable for active player
  activePlayer = 0;
  // Variable to hold game state
  playing = true;
  // Reset scores
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  // Reset player state
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// Function to switch to next player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // If activePlayer is equal to 0, (Player 1), then change activePlayer's value to 1, (Player 2)
  // Otherwise, stay as 0, (Player 1)
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Toggles the .player--active class to visually update the change in player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // Only executes if playing = true
  if (playing) {
    // 1. Generate Random Number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    // When dice roll is NOT a 1, add to current score
    if (dice !== 1) {
      currentScore += dice;
      // Updates score dynamically based on activePlayer state
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch tp next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    console.log('Hold button');
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      // Ensure that player--winner and player--active are never together at the same time
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Reset game
btnNew.addEventListener('click', init);
