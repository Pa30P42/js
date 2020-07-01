const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// const createListItem = (ingredient) => {
//   const item = document.createElement("li");
//   item.classList.add("list-item");
//   item.textContent = ingredient;

//   return item;
// };

// const listItems = ingredients.map((ingredient) => createListItem(ingredient));

// const productListRef = document.querySelector("#ingredients");

// productListRef.append(...listItems);

// console.log(productListRef);

//===== second
const fragment = document.createDocumentFragment();
const productListRef = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  fragment.appendChild(li);
});

productListRef.appendChild(fragment);
