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




// .forEach method
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}



const declineEverything = arr => {
  arr.forEach(politelyDecline);
};

declineEverything(veggies)

let acceptEverything = (arr) => {
  arr.forEach(newArr => {console.log(`Ok, I guess I will eat some ${newArr}.`)});
};

acceptEverything(veggies)




// .map array method
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num


let squareNums = arr => {
  return arr.map(newArr => toSquare(newArr));
};

console.log(squareNums(numbers))

// use sroted method
const sortYears = arr => arr.sort((x, y) => y - x);


const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))





// use .map method or for loop
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
let shoutGreetings = arr => {
  return arr.map(newArr => newArr.toUpperCase() + "!")
};


console.log(shoutGreetings(greetings))


// use filter and include method
const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))


const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))




//loop through objects
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

let isTheDinnerVegan = obj => {
  for (let i = 0; i < obj.length; i++)
    if (obj[i].source === "meat" || obj[i].source === "unknown") {
      return false
    } else {
      return true
    }
}

console.log(isTheDinnerVegan(dinner));


//use .sort function
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

console.log(sortSpeciesByTeeth(speciesArray))


// use indexOf function
let findMyKeys = (arr) => {
  return arr.indexOf("keys");
 };
 
 const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
 
 console.log(findMyKeys(randomStuff))


   //Factory functions
const dogFactory = (name, breed, weight) => {
  return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name() {
          return this._name;
      },
      set name(newName) {
          this._name = newName;
      },
      get breed() {
          return this._breed;
      },
      set breed(newBreed) {
          this._breed = newBreed;
      },
      get weight() {
          return this._weight;
      },
      set weight(newWeight) {
          this._weight = newWeight;
      },
      bark() {
          return 'ruff! ruff!'
      },
      eatTooManyTreats() {
          this._weight++
      }
  }
}

let newDag = dogFactory("Nelson", "chihahau", 10)

console.log(newDag.bark())























 