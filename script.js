// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randIndex = Math.floor(Math.random()*3);
  return choices[randIndex];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice){
    score = 0;
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (playerChoice === 'Rock' && computerChoice == 'Scissors'){
    score = 1;
  } else if (playerChoice === 'Paper' && computerChoice == 'Rock'){
    score = 1;
  } else if (playerChoice === 'Scissors' && computerChoice == 'Paper'){
    score = 1;
  }

  // Otherwise human loses (aka set score to -1)
  else {
    score = -1;
  }

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  let result = document.querySelector('#result');

  if (score == -1) {
    result.innerText = 'You Lose!';
  } else if (score == 1) {
    result.innerText = 'You Win!';
  } else {
    result.innerText = `It's a Draw!`;
  }

  let playerScore = document.getElementById('player-score');
  let hands = document.getElementById('hands');
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let rpsButtons = document.querySelectorAll('.rpsButton');
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
 
    rpsButtons.forEach( item => {
      item.addEventListener('click', function (){
        onClickRPS(rpsButtons);})
    });

  // Add a click listener to the end game button that runs the endGame() function on click
  document.querySelector('#endGameButton').addEventListener('click', endGame);  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  document.querySelector('#player-score').innerText = "";
  document.querySelector('#hands').innerText = "";
  document.querySelector('#result').innerText = "";
}

playGame()