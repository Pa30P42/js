const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    logins.push(login);
    return "Логин успешно добавлен!";
  } else if (!isLoginValid(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  } else {
    return "Такой логин уже используется!";
  }
};

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
