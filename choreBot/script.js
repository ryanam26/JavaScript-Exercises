

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let startButton = document.getElementById("start");
let currentlyPlaying = true;

let openDoor1 
let openDoor2 
let openDoor3

let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

let numClosedDoors = 3;

// Check for game ending bot, if image is the bot
const isBot = door => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

// Make each door clickable only once
const isClicked = door => {
    if ( door.src === closedDoorPath ) {
        return false;
    } else {
        return true;
    }
};



// Decreases the numCloseDoors variable and finished the game
const playDoor = (door) => {
        numClosedDoors--;
    if ( numClosedDoors === 0 ) {
        gameOver("win");
    } else if (isBot(door) === true) {
        gameOver();
    }
};

// random number from 0 - 3 which will randomly assign an image to an open door.
const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors );
    if ( choreDoor === 0 ) {
        openDoor1 = botDoorPath
        openDoor2 = beachDoorPath
        openDoor3 = spaceDoorPath
    } else if ( choreDoor === 1) {
        openDoor3 = botDoorPath
        openDoor1 = beachDoorPath
        openDoor2 = spaceDoorPath
    } else {
        openDoor2 = botDoorPath
        openDoor3 = beachDoorPath
        openDoor1 = spaceDoorPath
    }
};


// When user clicks on door it assign the image and calls isClick function to only open it once
doorImage1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};

doorImage2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};

doorImage3.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};

// Make startbutton refresh to start over
startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
        
}

// Function to refresha nd startover and reset all values
const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = "Good luck";
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};

// Function to end the game
const gameOver = status => {
    if (status === "win") {
        startButton.innerHTML = "You win!  Play again?"
    } else {
        startButton.innerHTML = "Game over! Play again?"
    }
    currentlyPlaying = false;
};


startRound();