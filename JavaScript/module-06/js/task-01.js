import users from "./users.js";

// const getUserNames = users.reduce((acc, user) => {
//   acc.push(user.name);
//   return acc;
// }, []);

// console.log(getUserNames(users));

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
