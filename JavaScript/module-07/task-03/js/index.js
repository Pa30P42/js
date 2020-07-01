const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const createGallery = (image) => {
//   const item = document.createElement("li");
//   item.classList.add("list-item");

//   const itemImage = document.createElement("img");
//   itemImage.classList.add("list-item__img");
//   itemImage.src = image.url;
//   itemImage.alt = image.alt;
//   item.append(itemImage);
//   return item;
// };

// const listItems = images.map((image) => createGallery(image));

// const galleryListRef = document.querySelector("#gallery");
// galleryListRef.classList.add("gallery-box");

// galleryListRef.append(...listItems);

// console.log(galleryListRef);

//===== second
const fragment = document.createDocumentFragment();

// const productListRef = document.querySelector("#ingredients");
images.forEach((image) => {
  const item = document.createElement("li");
  item.classList.add("item-list");

  const itemImage = document.createElement("img");
  itemImage.classList.add("list-item__img");
  itemImage.src = image.url;
  itemImage.alt = image.alt;
  item.append(itemImage);

  fragment.appendChild(item);
});

const galleryListRef = document.querySelector("#gallery");
galleryListRef.classList.add("gallery-box");

galleryListRef.appendChild(fragment);
