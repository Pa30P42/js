//=====mouseenter

const boxRef = document.querySelector(".reg-form");

boxRef.addEventListener("mouseenter", (event) => {
  console.log(event);
});

//====================Keypress

// window.addEventListener("keydown", (event) => {
//   console.log(event.code);
//   console.log(event.key);

//   if (event.code === "Escape") {
//     console.log("Esc was pushed");
//   }
// });

//====================EventListener
// const formRef = document.querySelector(".reg-form");

// formRef.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formRef = event.target;
//   const formData = new FormData(formRef);

//   const submitData = {};

//   formData.forEach((value, key) => {
//     console.log("value", value);
//     console.log("key", key);

//     submitData[key] = value;
//   });

//   console.log(submitData);
// });

// console.log(formRef);
// const mainBtn = document.querySelector(".main-btn");
// const addBtn = document.querySelector(".add-ev");
// const remBtn = document.querySelector(".rem-ev");

// const interactBtnFn = () => {
//   console.log("hello");
// };

// addBtn.addEventListener("click", () => {
//   mainBtn.addEventListener("click", interactBtnFn);
// });

// remBtn.addEventListener("click", () => {
//   mainBtn.removeEventListener("click", interactBtnFn);
// });

// import products from "./products";
// const titleRef = document.querySelector(".menu-list");
// console.log(titleRef);
// const linkRef = document.querySelectorAll(".menu-item");
// console.log(linkRef);

// const mainTitle = document.querySelector(".web-title");
// mainTitle.textContent = "Not a lorem bleat";

// mainTitle.classList.add("nav-link");
// console.log(mainTitle);
// mainTitle.classList.remove("nav-link");
// console.log(mainTitle);

// const titleFirst = document.createElement("h1");
// console.log(titleFirst);

// titleFirst.textContent = "Dynamicle made content. Coool";
// titleFirst.classList.add("web-title-class");
//=====

// const containerRef = document.createElement("div");
// containerRef.classList.add("product-card");
// console.log(containerRef);

// const titleRef = document.createElement("h1");
// titleRef.classList.add("main-title");
// titleRef.textContent = "Андронный колайдер";
// console.log(titleRef);

// const descrRef = document.createElement("p");
// descrRef.textContent = products.description;
// console.log(descrRef);

// const priceRef = document.createElement("p");
// priceRef.textContent = ` Price for one piece is ${products.price}`;
// console.log(priceRef);

// // containerRef.appendChild(titleRef);
// // containerRef.appendChild(descrRef);
// // containerRef.appendChild(priceRef);

// containerRef.append(titleRef, descrRef, priceRef);

// // const nav = document.querySelector(".menu-list");
// // console.log(nav);

// // const listItemRef = document.createElement("li");
// // listItemRef.textContent = "new item";
// // nav.prepend(listItemRef);

// const cardRootRef = document.querySelector("#root");
// console.log(cardRootRef);
// cardRootRef.appendChild(containerRef);
