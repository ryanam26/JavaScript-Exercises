const doorImage1 = document.getElementById("door1");
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");


doorImage1.onclick = () => {
    doorImage1.src = botDoorPath;
};

doorImage2.onclick = () => {
    doorImage2.src = beachDoorPath;
};

doorImage3.onclick = () => {
    doorImage3.src = spaceDoorPath;
};
