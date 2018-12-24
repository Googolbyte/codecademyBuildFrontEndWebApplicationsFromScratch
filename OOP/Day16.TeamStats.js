const team = {
  _players: [
    {
      firstName: 'Pete',
      lastName: 'Wheeler',
      age: 54
    },
    {
      firstName: 'Irving',
      lastName: 'Severino',
      age: 54
    },
    {
      firstName: 'Sharise',
      lastName: 'Severino',
      age: 26
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 43,
      opponentPoints: 8
    },
    {
      opponent: 'Seahawks',
      teamPoints: 8,
      opponentPoints: 43
    },
    {
      opponent: 'Patriots',
      teamPoints: 28,
      opponentPoints: 31
    }
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Assholes', 4, 2);

console.log(team._players);
console.log(team._games);
