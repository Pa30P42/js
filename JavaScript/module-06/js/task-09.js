import users from "./users.js";
const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort(
      (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length
    )
    .map((user) => user.name);
};

console.table(getNamesSortedByFriendsCount(users));
// [
//   "Moore Hensley",
//   "Sharlene Bush",
//   "Elma Head",
//   "Carey Barr",
//   "Blackburn Dotson",
//   "Sheree Anthony",
//   "Ross Vazquez",
// ];
