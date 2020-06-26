import users from "./users.js";
// let balance = 0;
const calculateTotalBalance = (users) => {
  return users
    .map((user) => user.balance)
    .reduce((acc, item) => {
      acc += item;
      return acc;
    }, 0);

  // users.map(function (user) {
  //   balance += user.balance;
  // });
  // return balance;
};

console.log(calculateTotalBalance(users)); // 20916
