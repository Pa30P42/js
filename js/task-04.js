let credits = 23500;

const pricePerDroid = 3000;

let totalPrice;

let quantityToBuy;

do {
  quantityToBuy = prompt("Введите Количество Дроидов ");

  if (quantityToBuy === null) {
    console.log("Отменено пользователем!");
    break;
  } else {
    totalPrice = quantityToBuy * pricePerDroid;

    if (totalPrice > credits) {
      console.log("Недостаточно средств на балансе");
    } else {
      console.log(
        `Вы купили ${quantityToBuy} дроидов, на счету осталось ${
          credits - totalPrice
        } кредитов.`
      );
      break;
    }
  }

  quantityToBuy = Number(quantityToBuy);
} while (true);
