'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'hello world';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1; // number is randomly selected
console.log(number);
let score = 20; //state variable
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const x = Number(document.querySelector('.guess').value); // x is the value(number) we give as input
  console.log(x, typeof x);

  if (!x) {
    // no input
    document.querySelector('.message').textContent = 'no number entered !';
    // score--;
    // document.querySelector('.score').textContent = score;
  } else if (x == number) {
    // player wins
    document.querySelector('.message').textContent = 'you won !!!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').style.display = 'none';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (x < number) {
    // input is lesser than number
    if (score < 2) {
      document.querySelector('.message').textContent = 'You lost the game !!';
      //   score--;
      document.querySelector('.guess').value = '';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = number;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').style.display = 'none';
      document.querySelector('body').style.backgroundColor = 'rgb(233, 67, 67)';
    } else {
      document.querySelector('.message').textContent = 'your number is lesser';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (x > number) {
    // input is geater than number
    if (score < 2) {
      document.querySelector('.message').textContent = 'You lost the game !!';
      //   score--;
      document.querySelector('.guess').value = '';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.check').style.display = 'none';
      document.querySelector('.number').textContent = number;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(233, 67, 67)';
    } else {
      document.querySelector('.message').textContent = 'your number is greater';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //   location.reload();
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.check').style.display = 'block';
});
