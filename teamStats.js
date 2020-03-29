const team = {
    _players: [
    {
      firstName: "Mo",
      lastName: "Salah",
      age: 28,
    },
    {
      firstName: "Bobby",
      lastName: "Firmino",
      age: 27
    },
    {
      firstName: "Sadio",
      lastname: "Mane",
      age: 26
    }],
    _games: [{
      opponent: "Man United",
      teamPoints: 2,
      opponentPoints: 1
    }],
    get firstname() {
      return this._players.firstName;
    },
    get lastName() {
      return this._players.lastName;
    },
    get age() {
      return this._players.age
    },
    addPlayer(firstName, lastName, age) {
      const player =  {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      return this._players.push(player);
    },
    addGame(opp, myPoints, oppPoints) {
      const game =  {
        opponent: opp,
        teamPoints: myPoints,
        opponentPoints: oppPoints
      }
      this._games.push(game);
    }
    };
  
  // console.log(team._games[0].opponentPoints)
  
  team.addPlayer("Steph", "Curry", 25)
  // team.addPlayer("Lisa", "Leslie", 44)
  // team.addPlayer("Bugs", "Bunny", 76)
  
  team.addGame("Man City", 6, 4)
  
  
  
  
  
  