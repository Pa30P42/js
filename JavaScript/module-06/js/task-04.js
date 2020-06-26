import users from "./users.js";

const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive);

  // const inactiveUsers = users.filter(function (user) {
  //   return user.isActive;
  // });
  // return inactiveUsers;
};

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
