import { map, playerArray } from './totals.js';
import { getName } from './utils/nameUtil.js';
import { formatCurrency } from './utils/moneyUtil.js';


/*
  Writing Table Html
*/
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
