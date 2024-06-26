import { games } from "../data/gameData.js";
import { qualifiedPlayers } from "./utils/nameUtil.js";

/*
    Fill Map
    Entry -> {String, [Integer, Integer]}
    Player Name, [All time in, All time out]
*/
export let map = new Map();
export let playerArray = [];

//iterate through games
for (let i = 0; i < games.length; i++) {
  //iterate through players of each game
  for (let j = 0; j < games[i].players.length; j++) {
    if (qualifiedPlayers.includes(games[i].players[j])) {
      /*
            Declaring variables
            player = string, players name
            playerIn = amount player bought in for in current indexed game
            playerOut = amount player cashed out with in current indexed game
            */
      let player = games[i].players[j];
      let playerIn = games[i].in[j];
      let playerOut = games[i].out[j];

      if (map.has(player)) {
        let prevIn = map.get(player)[0];
        let prevOut = map.get(player)[1];
        map.set(player, [prevIn + playerIn, prevOut + playerOut]);
      } else {
        playerArray.push(player);
        map.set(player, [playerIn, playerOut]);
      }
    }
  }
}

// sort player array based on winningest players
function comparator(player1, player2) {
  let player1Net = map.get(player1)[1] - map.get(player1)[0];
  let player2Net = map.get(player2)[1] - map.get(player2)[0];

  return player2Net - player1Net;
}
playerArray.sort(comparator);
