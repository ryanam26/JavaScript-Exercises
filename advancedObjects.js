
//THE THIS KEYWORD
const robot = {
    model: "1E78V2",
    energyLevel: 100,
    provideInfo() {
      console.log(`I am ${this.model} and my current energy level is ${this.energyLevel}.`)
    }
  };
  
  robot.provideInfo()


  
  
  //PRIVACY
  const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  robot._energyLevel = "high";
  
  robot.recharge()


//GETTERS
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === "number") {
        return `My current energy level is ${this._energyLevel}`;
      } else {
        return `System malfunction: cannot retrieve energy level`;
      }
    }
  };
  
  
  console.log(robot.energyLevel)

  //SETTERS
  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if (typeof num === "number" && num >= 0) {
        this._numOfSensors = num
      } else {
        console.log("Pass in a number that is greater than or equal to 0")
      }
        
    }
    
  };
  
  robot.numOfSensors = 100;
  console.log(robot.numOfSensors)


  //FACTORY FUNCTIONS
  const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log("Beep Boop");
      }
    }
  };
  
  const tinCan = robotFactory("P-500", true);
  
  tinCan.beep()

  //Property Value Shorthand
  function robotFactory(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

  
  //DESTRUCTING ASSIGNMENT
  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Boop Beep');
      },
      fireLaser() {
        console.log('Pew Ewee');
      },
    }
  };
  
  const {functionality} = robot
  
  functionality.beep();













  


