//======forEach
// const numbers = [5, 18, 15, 28, 25];

// numbers.forEach(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

//==================Map

// const numbers = [5, 13, 31, 14, 213];

// const mappedNumbers = numbers.map(function (element) {
//   return element * 2;
// });

// console.log(mappedNumbers);
// console.log(numbers);
//========

// const players = [
//   {
//     id: "player-1",
//     name: "mango",
//     timaPlayes: 318,
//     points: 54,
//     online: false,
//   },
//   {
//     id: "player-2",
//     name: "poly",
//     timaPlayes: 128,
//     points: 24,
//     online: true,
//   },
//   {
//     id: "player-3",
//     name: "ajax",
//     timaPlayes: 328,
//     points: 14,
//     online: false,
//   },
//   {
//     id: "player-4",
//     name: "nikita",
//     timaPlayes: 38,
//     points: 154,
//     online: true,
//   },
// ];

// const playerName = players.map(function (player) {
//   return player.name;
// });

// console.table(players);

// const updatedPlayers = players.map(function (player) {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

// console.table(updatedPlayers);

// const playerIdUpdate = "player-1";

// const idUpdatedPlayers = players.map(function (player) {
//   if (player.id === playerIdUpdate) {
//     return {
//       ...player,
//       timaPlayes: player.timaPlayes + 50,
//     };
//   }
//   return player;
// });

// console.table(idUpdatedPlayers);

//=======filetr

// const numbers = [2, 5, 23, 654, 23, 5];

// const filteredNumbers = numbers.filter(function (number) {
//   return number > 20;
// });

// console.log(filteredNumbers);

//======
const players = [
  {
    id: "player-1",
    name: "mango",
    timaPlayes: 318,
    points: 54,
    online: false,
  },
  {
    id: "player-2",
    name: "poly",
    timaPlayes: 128,
    points: 24,
    online: true,
  },
  {
    id: "player-3",
    name: "ajax",
    timaPlayes: 328,
    points: 14,
    online: false,
  },
  {
    id: "player-4",
    name: "nikita",
    timaPlayes: 38,
    points: 154,
    online: true,
  },
];

// const onlinePlayers = players.filter(function (player) {
//   return player.online;
// });
// console.table(onlinePlayers);

// const offlinePlayers = players.filter(function (player) {
//   return !player.online;
// });
// console.table(offlinePlayers);

//========find
// const playerIdToFind = "player-3";

// const player = players.find(function (n) {
//   return n.id === playerIdToFind;
// });

// console.log(player);

//=======every/some======

// const isOnline = players.some(function (player) {
//   return player.online;
// });

// console.log(isOnline);

// const isOnline = players.every(function (player) {
//   return player.online;
// });

// console.log(isOnline);
