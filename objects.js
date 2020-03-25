
//Bracket Notation
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  
  let isActive = spaceship["Active Mission"]
  
  console.log(isActive)

  
  // Property Assignment
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  
  spaceship.color = "glorious gold";
  
  spaceship.numEngines = 2;
  
  delete spaceship["Secret Mission"]
  
  console.log(spaceship)

  
  //METHODS
  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log("Spim... Borp... Glix... Blastoff!")
  }
}

console.log(alienShip.retreat())
console.log(alienShip.takeOff())


//NESTED OBJECTS
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  // console.log(spaceship.nanoelectronics.computer.terabytes);
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  // console.log(capFave)
  spaceship.passengers = [
    {"Ryan": "Morrison"},
    {"Michelle": "Morrison"}
  ]
  
  let firstPassenger = spaceship.passengers[0]
  
  console.log(firstPassenger)
  
  
//PASS BY REFERENCE
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  let greenEnergy = obj => {
    obj["Fuel Type"] = "avocado oil"
  };
  
  let remotelyDisable = obj => {
    obj.disabled = true
  };
  
  greenEnergy(spaceship)
  remotelyDisable(spaceship)
  
  console.log(spaceship)


// LOOPING THROUGH OBJECTS - for...in
  let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for (let crewName in spaceship.crew) {
  console.log(`${crewName}: ${spaceship.crew[crewName].name}`)
};

for (let crewName in spaceship.crew) {
  console.log(`${spaceship.crew[crewName].name}: ${spaceship.crew[crewName].degree}`)
}



