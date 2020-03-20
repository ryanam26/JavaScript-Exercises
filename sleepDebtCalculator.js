// Get sleep hours for everyday of the week

const getSleepHours = day => {
    switch (day) {
      case "Monday":
        return 8;
      break;
    }
      switch (day) {
      case "Tuesday":
        return 6;
      break;
    }
      switch (day) {
      case "Wednesday":
        return 7;
      break;
    }
      switch (day) {
      case "Thursday":
        return 4;
      break;
    }
      switch (day) {
      case "Friday":
        return 8;
      break;
    }
      switch (day) {
      case "Saturday":
        return 8;
      break;
    }
      switch (day) {
      case "Sunday":
        return 9;
      break;
    }
  };
    
  // Calculate the total amount of Sleep per week
  
  const getActualSleepHours = () => {
    let monday =  getSleepHours("Monday");
    let tuesday =  getSleepHours("Tuesday");
    let wednesday =  getSleepHours("Wednesday");
    let thursday =  getSleepHours("Thursday");
    let friday =  getSleepHours("Friday");
    let saturday =  getSleepHours("Saturday");
    let sunday =  getSleepHours("Sunday");
    return monday + tuesday + wednesday + thursday + friday + saturday + sunday;
  }
  
  // Calculate the ideal amount of sleep needed
  
  const getIdealSleepHours = () => {
    idealHours = 8;
    return idealHours * 7;
  };
  
  
  // Calculate your sleep debt or if you sleep longer than needed.
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("Perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
      let dif = idealSleepHours - actualSleepHours;
      console.log("Got more sleep than needed, " + dif + "hours to be exact.")
    } else {
      let dif = idealSleepHours - actualSleepHours; 
      console.log("Should get more rest, " + dif + " to be exact.");
    }
  };
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  