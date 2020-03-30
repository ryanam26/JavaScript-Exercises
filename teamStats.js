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
    _games: [
    {
      opponent: "Man United",
      teamPoints: 2,
      opponentPoints: 1
    },
    {
      opponent: "Chelsea",
      teamPoints: 3,
      opponentPoints: 1
    },
    {
      opponent: "Everton",
      teamPoints: 6,
      opponentPoints: 2
    }],
    
    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },
    
    addPlayer(firstName, lastName, age) {
      const player =  {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this.players.push(player);
    },
    addGame(opp, myPoints, oppPoints) {
      const game =  {
        opponent: opp,
        teamPoints: myPoints,
        opponentPoints: oppPoints
      }
      this.games.push(game);
    }
    };
  
  
  team.addPlayer("Steph", "Curry", 25)
  team.addPlayer("Lisa", "Leslie", 44)
  team.addPlayer("Bugs", "Bunny", 76)

  
  
  team.addGame("Man City", 6, 4)
  team.addGame("Chelsea", 6, 4)
  team.addGame("Everton", 6, 4)

  console.log(team._games)
  
  
  
  
  
  
  