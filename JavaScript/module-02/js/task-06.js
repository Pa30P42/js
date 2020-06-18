let numbers = [];

let total = 0;

let input;

do {
  input = prompt("enter number");

  if (input !== null) {
    if (!isNaN(input)) {
      numbers.push(Number(input));
    } else {
      alert("you entered not a number");
    }
  }

  if (input === null) {
    for (number of numbers) {
      total += number;
    }
    if (total !== 0) {
      console.log(`sum = ${total}`);
    }
  }
} while (input !== null);

console.log(numbers);
