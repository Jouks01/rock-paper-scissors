let userChoice;
let computerChoice;

const userBanner = document.getElementById('you');
const userBanner2 = document.getElementById('you2');
const computerBanner = document.getElementById('computer');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const rockComputer = document.getElementById('rockComputer');
const paperComputer = document.getElementById('paperComputer');
const scissorsComputer = document.getElementById('scissorsComputer');

const images = document.getElementById('images');

let gameSwitch = false;

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    rockComputer.style.display = 'block';
    return 'rock';
  } else if (randomNumber === 1) {
    paperComputer.style.display = 'block';
    return 'paper';
  } else if (randomNumber === 2) {
    scissorsComputer.style.display = 'block';
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie';
  } 

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'lost'
    } else if (computerChoice === 'rock') {
      return 'won'
    }
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'lost'
    } else if (computerChoice === 'scissors') {
      return 'won'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'lost'
    } else if (computerChoice === 'paper') {
      return 'won'
    }
  }
};

const playGame = () => {
  computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
  if (determineWinner(userChoice, computerChoice) === 'won') {
    userBanner.style.backgroundColor = 'rgba(0, 255, 208, 0.6)';
    userBanner2.style.backgroundColor = 'rgba(0, 255, 208, 0.6)';
    computerBanner.style.backgroundColor = 'rgba(209, 0, 0, 0.7)';
  } else if (determineWinner(userChoice, computerChoice) === 'lost') {
    computerBanner.style.backgroundColor = 'rgba(0, 255, 208, 0.6)';
    userBanner.style.backgroundColor = 'rgba(209, 0, 0, 0.7)';
    userBanner2.style.backgroundColor = 'rgba(209, 0, 0, 0.7)';
  } else if (determineWinner(userChoice, computerChoice) === 'tie') {
    computerBanner.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    userBanner.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    userBanner2.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
  }
};

const reset = function() {
  gameSwitch = false;
  userBanner.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  userBanner2.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  computerBanner.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  rockComputer.style.display = 'none';
  paperComputer.style.display = 'none';
  scissorsComputer.style.display = 'none';
  rock.hidden = false;
  paper.hidden = false;
  scissors.hidden = false;
};

function start(choice) {
  gameSwitch = true;
  userChoice = choice;
  if (choice === 'rock') {
    paper.hidden = true;
    scissors.hidden = true;
  } else if (choice === 'paper') {
    rock.hidden = true;
    scissors.hidden = true;
  } else if (choice === 'scissors') {
    rock.hidden = true;
    paper.hidden = true;
  }
  playGame();
  setTimeout(() => {
    reset()
  }, 2500);
};

rock.onclick = function() {
  start('rock');
};

paper.onclick = function() {
  start('paper');
};

scissors.onclick = function () {
  start('scissors');
};