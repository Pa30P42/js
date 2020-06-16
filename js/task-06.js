let total = 0;

while (true) {
  let input = prompt("введите число");

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert("Вы не ввели число");
    continue;
  }

  total += input;
}
