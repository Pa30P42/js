import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};

// let maleUsers = [];
// const getUsersWithGender = (users, gender) => {
//   maleUsers = users.filter(function (user) {
//     if (user.gender === gender) {
//       return user.name;
//     }
//   });
//   return maleUsers;
// };

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// возвращает обьекты
