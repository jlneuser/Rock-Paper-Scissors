function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Invalid choice');
    return null; // Return null to indicate an invalid choice
  }
}

var getComputerChoice = function() {
  var ranNum = Math.floor(Math.random() * 3);
  if (ranNum === 0) {
    return 'rock';
  } else if (ranNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It is a tie';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins';
    } else {
      return 'You win';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins';
    } else {
      return 'You win';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins';
    } else {
      return 'You win';
    }
  }
}

function playGame() {
  var userChoice = getUserChoice('rock');
  
  if (!userChoice) return; // Exit if the user choice is invalid
  
  var computerChoice = getComputerChoice();
  console.log('User Choice:', userChoice);
  console.log('Computer Choice:', computerChoice);

  var result = determineWinner(userChoice, computerChoice);
  console.log(result);
}

playGame();
