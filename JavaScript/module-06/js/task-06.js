import users from "./users.js";

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age > min && user.age < max);

  // const ageFilteredUser = users.filter(function (user) {
  //   return user.age > min && user.age < max;
  // });
  // return ageFilteredUser;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
