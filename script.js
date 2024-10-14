let rand = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Enter number between 1 and 100');
  } else {
    if (numGuess == 10) {
      displayGuess(guess);
      displayMessage(`Game Over.</br>Random number was ${rand}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === rand) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < rand) {
    displayMessage('Number is low');
  } else {
    displayMessage('Number is high');
  }
}

function displayGuess(guess) {
  userinput.value = '';         //to empty the userinput field after submission.
  guessSlot.innerHTML += `${guess} | `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userinput.vlaue='';
  userinput.setAttribute('disabled','');            //to disable the userinput field.
  p.innerHTML=`<button id="newGame">Start new Game</button>`;
  startOver.appendChild(p);         //to append the button in resultparas class.
  playGame=false; 
  newGame();
}

function newGame() {
  const newGameButton=document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    displayMessage('');
    rand = parseInt(Math.random() * 100 + 1);
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userinput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  });
}
