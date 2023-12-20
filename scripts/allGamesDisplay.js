import { games } from '../data/gameData.js';
import { formatCurrency } from './utils/moneyUtil.js';
import { getName } from './utils/nameUtil.js';

displayAllGames();


//CODE FOR DISPLAYING A SINGLE GAME
function displayGame(date) {

  document.querySelector('h2').innerHTML = date;
  document.querySelector('.buttons-container').innerHTML = `
    <div class="buttons">
      <a onclick="
      displayAllGames();
      "class="button active">Back</a>
    </div>`

    document.querySelector('.button').addEventListener("click", () => displayAllGames());

  let tableHTML =
    `
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Player</th>
        <th>Total In</th>
        <th>Total Out</th>
        <th>Net</th>
      </tr>
    </thead>
    <tbody>
`;

  //finding the selected game from gameData
  let game;
  for (let i = 0; i < games.length; i++) {
    if (games[i].date === date) {
      game = games[i];
    }
  }

  //creating map and sorted array
  let map = new Map();
  let playerArray = [];

  for (let i = 0; i < game.players.length; i++) {
    map.set(game.players[i], [game.in[i], game.out[i]]);
    playerArray.push(game.players[i]);
  }

  function comparator(player1, player2) {

    let player1Net = map.get(player1)[1] - map.get(player1)[0];
    let player2Net = map.get(player2)[1] - map.get(player2)[0];

    return player2Net - player1Net;
  }
  playerArray.sort(comparator);

  //writing html
  for (let i = 0; i < playerArray.length; i++) {
    let player = playerArray[i];
    tableHTML += `
  <tr>
    <td>${i + 1}</td>
    <td>${getName(player)}</td>
    <td>${formatCurrency(map.get(player)[0])}</td>
    <td>${formatCurrency(map.get(player)[1])}</td>
    <td>${formatCurrency(map.get(player)[1] - map.get(player)[0])}</td>
  </tr>
  `
  }

  tableHTML +=
    `
  </tbody>
</table>
`;

  document.querySelector('.table-div').innerHTML = tableHTML;

}


//CODE FOR DISPLAYING ALL GAMES WITH OPTION TO SELECT SPECIFIC GAME
function displayAllGames() {

  document.querySelector('h2').innerHTML = "";
  document.querySelector('.buttons-container').innerHTML = `
    <div class="buttons">
      <a href="./index.html" class="button active">Standings</a>
      <p class="button passive">Games</p>
    </div>`
  
  let tableHTML =
    `
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th># of Players</th>
      <th>Total Pot</th>
    </tr>
  </thead>
  <tbody>
`;

  for (let i = 0; i < games.length; i++) {
    let date = games[i].date;
    let numPlayers = games[i].players.length;
    let sumPot = 0;
    for (let j = 0; j < games[i].in.length; j++) {
      sumPot += games[i].in[j];
    }
    tableHTML += `
  <tr>
    <td><a id="p${i}">${date}</a></td>
    <td>${numPlayers}</td>
    <td>${formatCurrency(sumPot)}</td>
  </tr>
  `
  }

  tableHTML +=
    `
  </tbody>
</table>
`;

  document.querySelector('.table-div').innerHTML = tableHTML;


  for (let i = 0; i < games.length; i++) {
    let link = document.querySelector(`#p${i}`);
    link.addEventListener("click", () => displayGame(link.innerHTML));
  }
}





