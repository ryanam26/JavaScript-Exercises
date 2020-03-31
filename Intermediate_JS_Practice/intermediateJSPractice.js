// reverse an array without using a built in function, Could use .reverse() method
const reverseArray = arr => {
  
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

  const greetAliens = arr => {
    for (let i = 0; i < arr.length; i++) {
      console.log("Oh powerful " + arr[i] + ", we humans offer our unconditional surrender!")
    }
  };
  
  greetAliens(aliens)



//a function without using .map()
const convertToBaby = arr => {
    newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push("baby " + arr[i])
  }
  return newArr
};

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))



// loops with two different variables
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]



// .forEach method
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:

const declineEverything = arr => {
  arr.forEach(politelyDecline);
};

declineEverything(veggies)

let acceptEverything = (arr) => {
  arr.forEach(newArr => {console.log(`Ok, I guess I will eat some ${newArr}.`)});
};

acceptEverything(veggies)















