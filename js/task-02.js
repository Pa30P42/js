const total = "100";

let ordered = prompt("Order quandity");

if (ordered === null) {
  console.log("Отменено пользователем");
} else if (Number(ordered) <= total) {
  console.log(" Заказ оформлен");
} else {
  console.log("Недостаточно средств на складе");
}
