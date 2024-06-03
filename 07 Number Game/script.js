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
    this.init();
    // Probably help if you remember to call it..
    this.bindEventListeners();
  }

  init() {
    this.scores = [0, 0];
    this.currentScore = 0;
    this.activePlayer = 0;
    this.playing = true;
    this.updateUI();
  }

  // Event handler bundle
  bindEventListeners() {
    btnRoll.addEventListener('click', () => this.rollDice());
    btnHold.addEventListener('click', () => this.hold());
    btnNew.addEventListener('click', () => this.reset());
  }

  // Refactored DOM manipulation into method
  updateUI() {
    score0El.textContent = this.scores[0];
    score1El.textContent = this.scores[1];
    current0El.textContent = this.activePlayer === 0 ? this.currentScore : 0;
    current1El.textContent = this.activePlayer === 1 ? this.currentScore : 0;

    diceEl.classList.add('hidden');
    player0El.classList.toggle('player--active', this.activePlayer === 0);
    player1El.classList.toggle('player--active', this.activePlayer === 1);

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    if (this.scores[0] >= 20) player0El.classList.add('player--winner');
    if (this.scores[1] >= 20) player1El.classList.add('player--winner');
  }

  switchPlayer() {
    this.currentScore = 0;
    this.activePlayer = this.activePlayer === 0 ? 1 : 0;
    this.updateUI();
  }

  rollDice() {
    // Only executes if playing = true
    if (this.playing) {
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
        // Switch to next player
        this.switchPlayer();
      }
    }
  }

  // Hold Button
  hold() {
    if (this.playing) {
      // For Debugging
      console.log('Hold button Debugger');
      // Adds current score to active player's score if true
      this.scores[this.activePlayer] += this.currentScore;

      // Check if player's score is >= 20 (changed from 100 to 20 for quicker testing)
      if (this.scores[this.activePlayer] >= 20) {
        this.playing = false;
      }
      this.updateUI();
      if (this.playing) {
        this.switchPlayer();
      }
    }
  }

  reset() {
    this.init();
  }
}

// Instantiate the game object to start the game
new Game();
