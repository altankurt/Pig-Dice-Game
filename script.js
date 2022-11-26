'use strict';

// selecting elements
const diceSt = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

let scores, currentScore, activePlayer, playing;

// starting condition
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceSt.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // random dice generating
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceSt.classList.remove('hidden');
    diceSt.src = `./assets/dice-${dice}.png`;

    // dice rolls 1 special case
    if (dice !== 1) {
      // add dice to current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});
