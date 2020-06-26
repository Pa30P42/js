import users from "./users.js";

const sortedByAge = [...users].sort(function (prevUser, nextUser) {
  return prevUser.age - nextUser.age;
});

console.table(sortedByAge);
