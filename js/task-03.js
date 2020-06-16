let password;

const ADMIN_PASSWORD = "jqueryismyjam";

let message;

do {
  password = prompt("Введите пароль");

  if (password === null) {
    message = "отменено пользователем";
    break;
  } else if (password === ADMIN_PASSWORD) {
    message = "Добро Пожаловать";
    break;
  } else if (password !== ADMIN_PASSWORD) {
    message = "Доступ запрещен, неверный пароль!";
    break;
  }

  password = Number(password);
} while (true);

alert(message);
