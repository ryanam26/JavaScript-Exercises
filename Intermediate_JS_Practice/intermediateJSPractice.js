// reverse an array without using a built in function, Could use .reverse() method
const reverseArray = (arr) => {
  
    let reverseArr = [];
    
    for (let i = arr.length-1; i >=0; i--) {
      reverseArr.push(arr[i]);
    }
    return reverseArr
  }
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 



  // build function without using .forEach method
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

  let greetAliens = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      console.log("Oh powerful " + arr[i] + ", we humans offer our unconditional surrender!")
    }
  };
  
  greetAliens(aliens)