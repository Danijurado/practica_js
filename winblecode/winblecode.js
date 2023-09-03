const players = [
    'Alberto C',
    'David J',
    'Javier M',
    'Edu Aguilar'
];

// cuadro del torneo
const tournament = [];

//funcion para generar los partidos
function generateMatches(players) {
    const ramdomListPlayers = players.sort(() => 0.5 - Math.random());
    const matches = [];
    for (let i = 0; i < ramdomListPlayers.length; i += 2) {
        matches.push([ramdomListPlayers[i], ramdomListPlayers[i + 1]]);
    }
    return matches;
};
console.log(generateMatches(players));
//console.log(Math.random())

//funcion simular partido
const score = [0, 15, 30, 40];
function createMatch (player1, player2) {
    return {
        pointWonBy(id) {

        }
    }
}

function createPlayer(id, name) {
  return {
    id,
    name,
    points: 0, //indice del array de points
    games: 0,
    score() {
      this.points++
    }
  }
}

const points = [0, 15, 30, 40]

function createMatch(firstPlayer, secondPlayer) {
  return {
    players: [
      createPlayer(1, firstPlayer),
      createPlayer(2, secondPlayer),
    ],
    pointWonBy(playerId) {
      const player = this.players.find(({ id }) => id === playerId)

      player.score()

      // logica de cuando gana
      //
      // aqui sabes los puntos de los dos jugadores
      //
      //
      //

    },
    getCurrentRoundScore() {
      const [firstPlayer, secondPlayer] = this.player

      // Logica de mostrar
      if (firstPlayer.points > 3 && this.players[1].points > 3 && this.players[0].points === this.players[1].points) {
        console.log('Deuce')
      } else if (this.players[0].points > 3 && this.players[0].points > this.players[1].points) {
        console.log(`Advantage ${this.players[0].name}`)
      } else if (this.players[1].points > 3 && this.players[1].points > this.players[0].points) {
        console.log(`Advantage ${this.players[1].name}`)
        //unir estos dos
      } else {
        const [winner, loser] = this._sortPlayersByPoints()

        console.log(`${winner.name} ${points[winner.points]}-${points[loser.points]}`);
      }
    },
    _sortPlayersByPoints() {
      return this.players.sort((firstPlayer, secondPlayer) => firstPlayer.points - secondPlayer.points).reverse()
    }
  }
}


const game = createMatch('Alberto C', 'David J')


game.pointWonBy(1)
game.pointWonBy(1)
game.pointWonBy(1)
game.pointWonBy(2)
game.pointWonBy(2)
game.pointWonBy(2)
game.pointWonBy(1)
game.pointWonBy(2)
game.pointWonBy(2)

game.getCurrentRoundScore();

/*
Intento de simulacion de torneo, 
me he atascado y no he conseguido resolver el problema, mando
lo que tengo hecho.*/