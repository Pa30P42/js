import images from "./gallery-items.js";

let galleryRef = document.querySelector(".gallery");
const modalRef = document.querySelector(".lightbox");
const closeBtn = document.querySelector(".lightbox__button");
const imgRef = document.querySelector(".lightbox__image");
const modalContentRef = document.querySelector(".lightbox__content");

const grindCreator = () => {
  let markup = "";
  for (let i = 0; i < images.length; i += 1) {
    markup += `<li class="gallery__item"> 
      <a class="gallery__link" 
      >
      <img class="gallery__image" 
      alt = "${images[i].description}"
      src=${images[i].preview}
      data-source=${images[i].original}
      >
      </a> </li>`;
    // Не забудь вписать href
    // console.log(images[i].description);
  }

  galleryRef.innerHTML = markup;
};

grindCreator();

const showModal = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  modalRef.classList.add("is-open");
  imgRef.src = e.target.dataset.source;
  imgRef.alt = e.target.alt;

  modalRef.addEventListener("click", closeModal);
  document.addEventListener("keydown", buttonPush);
};

// const onCloseClick = (e) => {
//   if (e.target === closeBtn || e.target === modalContentRef) {
//     closeModal(e);
//   }
// }; // Почему это работает ????
const moveToRight = (e) => {
  let srcOfImg = imgRef.getAttribute("src");

  const elementIndex = images.findIndex(
    (element) => element.original === srcOfImg
  );
  const newElementIndex = elementIndex + 1;
  if (newElementIndex === 9) {
    srcOfImg = imgRef.setAttribute("src", images[0].original);
  }
  if (newElementIndex !== 9) {
    srcOfImg = imgRef.setAttribute("src", images[newElementIndex].original);
  }
};

const moveToLeft = (e) => {
  let srcOfImg = imgRef.getAttribute("src");

  const elementIndex = images.findIndex(
    (element) => element.original === srcOfImg
  );
  const newElementIndex = elementIndex - 1;
  if (newElementIndex === -1) {
    srcOfImg = imgRef.setAttribute("src", images[8].original);
  }
  if (newElementIndex !== -1) {
    srcOfImg = imgRef.setAttribute("src", images[newElementIndex].original);
  }
};
function buttonPush(e) {
  if (e.key === "Escape") {
    closeModal(e);
  }
  if (e.key === "ArrowRight") {
    moveToRight(e);
  }
  if (e.key === "ArrowLeft") {
    moveToLeft(e);
  }
}

function closeModal(e) {
  if (e.target.nodeName !== "IMG") {
    modalRef.classList.remove("is-open");
    imgRef.src = "";
  }
}

galleryRef.addEventListener("click", showModal);
