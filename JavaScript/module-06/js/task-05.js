import users from "./users.js";

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);

  // const searchedUser = users.find(function (user) {
  //   return user.email === email;
  // });
  // return searchedUser;
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
