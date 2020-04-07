

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let openDoor1 
let openDoor2 
let openDoor3

const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");

const numClosedDoors = 3;

const playDoor = () => {
        numClosedDoors--;
    if ( numClosedDoors === 0 ) {
        gameOver()
    }
};

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
}



doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
};

doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
};

doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
};


randomChoreDoorGenerator()