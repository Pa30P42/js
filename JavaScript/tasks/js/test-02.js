import products from "./products.js";

console.table(products);

const createProductCard = (product) => {
  const containerRef = document.createElement("div");
  containerRef.classList.add("product-card");

  const titleRef = document.createElement("h1");
  titleRef.classList.add("main-title");
  titleRef.textContent = product.name;

  const descrRef = document.createElement("p");
  descrRef.textContent = product.description;

  const priceRef = document.createElement("p");
  priceRef.textContent = ` Price for one piece is ${product.price}`;

  containerRef.append(titleRef, descrRef, priceRef);

  return containerRef;
};

// console.log(createProductCard(products[2]));

// products.forEach((product) => {
//   console.log(createProductCard(product));
// });
const productCards = products.map((product) => createProductCard(product));

const productListRef = document.querySelector(".js-products");
productListRef.append(...productCards);
