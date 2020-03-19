// Get the users choice

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper") {
      return userInput;
    } else if (userInput === "scissors") {
      return userInput;
    } else {
      console.log("Wrong input, try again.")
    }
  };



// Get the computer choice

const getComputerChoice = () => {
  number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};


// determine a winner

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Game Tied";
    }
    else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer Won";
      } else {
        return "User Won";
      }
    }
    else if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer Won";
      } else {
        return "User Won";
      }
    }
    else if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer Won";
      } else {
        return "User Won";
      }  
    }
  };
  
  
  // Play the game

  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame()