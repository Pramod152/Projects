'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;

console.log((document.querySelector('.guess').value = 20));
*/

//Event Listner like on click do this, on hover mouse do this ,on press do this etc

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there's nothing selected
  if (!guess) {
    displayMessage('No Number!');
  }
  //When the guess and secretNumber are equal
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '39rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // //When guess to high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage('Too high!');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('You lost the game');
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //When guess is low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage('Too Low');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('You lost the game');
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').value = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = 10;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
