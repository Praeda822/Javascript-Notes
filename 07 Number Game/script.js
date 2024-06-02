'use strict';

// Selecting state elements
const select = selector => document.querySelector(selector);

const player0El = select('.player--0');
const player1El = select('.player--1');
const score0El = select('#score--0');
const score1El = select('#score--1');
const current0El = select('#current--0');
const current1El = select('#current--1');

const diceEl = select('.dice');
const btnNew = select('.btn--new');
const btnRoll = select('.btn--roll');
const btnHold = select('.btn--hold');

// Define the variables as globally scoped
// Then redefine them within the init function
let scores, currentScore, activePlayer, playing;

class Game {
  constructor() {
    this.scores = [0, 0];
    this.currentScore = 0;
    this.activePlayer = 0;
    this.playing = true;
    this.init();
  }

init(){
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
}

switchPlayer(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  this.currentScore = 0;
  this.activePlayer = this.activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

rollDice() {
  // Only executes if playing = true
  if (thisplaying) {
    // 1. Generate Random Number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    
    if (dice !== 1) {
      this.currentScore += dice;
      // Updates score dynamically based on activePlayer state
      document.getElementById(`current--${this.activePlayer}`).textContent =
        this.currentScore;
    } else {
      // Switch tp next player
      this.switchPlayer();
    }
  }
};

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
};
}
