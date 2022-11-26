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

// starting condition
diceSt.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  // random dice generating
  const dice = Math.trunc(Math.random() * 6) + 1;
});
