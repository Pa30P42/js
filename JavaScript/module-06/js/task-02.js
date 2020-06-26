import users from "./users.js";

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
  // return users.filter(function (user) {
  //   if (user.eyeColor === color) {
  //     return user.name;
  //   }
  // });
};

console.table(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
