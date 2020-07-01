let counterValue = document.querySelector("#value");
let sum = 0;

const addBtn = document.querySelector('[data-action="increment"]');
const desBtn = document.querySelector('[data-action="decrement"]');

const increment = () => {
  sum += 1;
  return (counterValue.textContent = sum);
};

const decrement = () => {
  sum -= 1;
  return (counterValue.textContent = sum);
};

addBtn.addEventListener("click", increment);
desBtn.addEventListener("click", decrement);
