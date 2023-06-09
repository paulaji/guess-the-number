'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number 🥇';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.score').textContent);
console.log(document.querySelector('.number').textContent);

document.querySelector('.score').textContent = 15;
document.querySelector('.number').textContent = 19;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20 + 1);
console.log(secretNumber);
let score = 20;
console.log(score);
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when wrong input is given
    if(!guess | guess > 20 | guess < 1){
        document.querySelector('.message').textContent = 'Invalid Input ⛔';
    } 
    // when player wins
    else if(guess == secretNumber) {
        document.querySelector('.message').textContent = '🏆 YOU WIN!! 🏆';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = /*guess*/ `😃`;
        document.querySelector('.head-1').textContent = `YOUR GUESS IS CORRECT!`;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // when guess is higher
    else if (guess > secretNumber) {
        if(score > 0){
            document.querySelector('.message').textContent = 'guess lower! 👇';
            score--;
            console.log(score);
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = 'You lost 😭';
            document.querySelector('.message').textContent = 'You DIPSH*T 😡';
        }
    }
    // when guess is lower
    else {
        if(score > 0){
            document.querySelector('.message').textContent = 'guess higher! ☝';
            score--;
            console.log(score);
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = 'You lost 😭';
            document.querySelector('.message').textContent = 'You DIPSH*T 😡';
        }
    }
    
});

// document.querySelector('.check').addEventListener('click', function(){
document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20 + 1);
    score = 20;
    console.log(secretNumber);
    document.querySelector('.number').textContent = /*guess*/ `?`;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.head-1').textContent = `Guess a Number`;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    console.log(score);
});

