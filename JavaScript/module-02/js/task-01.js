// const presidentList = ["Clinton", "Rusvelt", "Obama", "Trump"];

// for (let i = 0; i < 4; i += i) {
//   console.log("Our president was -", presidentList[i]);
// }

// Additional task
// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";

// let totalWidth =
//   Number.parseInt(padding) +
//   Number.parseInt(border) +
//   Number.parseInt(contentWidth) +
//   "px";

// console.log(totalWidth);

//Additional task 2

// let day = 16;
// let month = 06;
// let year = 2020;

// let date = `${day}\\${month}\\${year}`;

// console.log(date);

// let day = 02;

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
      break;
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
