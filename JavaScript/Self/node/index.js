const validator = require("validator");
// const throttle = require("throttle");
const greeter = require("./greeter");

greeter("salam braaat");

const validateEmail = (email) => {
  return validator.isEmail(email);
};

console.log(
  "is mango@gmail.com  a valid email:",
  validateEmail("mango@gmail.com")
);
