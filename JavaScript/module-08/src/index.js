import images from "./gallery-items.js";

let galleryRef = document.querySelector(".gallery");
const modalRef = document.querySelector(".lightbox");
const closeBtn = document.querySelector(".lightbox__button");
const imgRef = document.querySelector(".lightbox__image");
const modalContentRef = document.querySelector(".lightbox__content");

const grindCreator = () => {
  let markup = "";
  for (let i = 1; i < images.length; i += 1) {
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

let altOfImg = "";

const showModal = (e) => {
  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      closeModal(e);
    }
    if (event.code === "ArrowRight") {
      moveToRight(e);
    }
  });
  modalRef.classList.add("is-open");
  imgRef.src = e.target.dataset.source;
  imgRef.alt = e.target.alt;
};

// const onCloseClick = (e) => {
//   if (e.target === closeBtn || e.target === modalContentRef) {
//     closeModal(e);
//   }
// };// Почему это работает ????
function moveToRight(e) {
  altOfImg = e.target.getAttribute("alt");

  for (let i = 0; i < images.length; i += 1) {
    if (images[i].description === altOfImg) {
      imgRef.setAttribute("src", images[i + 1].original);
      imgRef.setAttribute("alt", images[i + 1].description);
      // imgRef.src = images[i + 1].original;
    }
  }

  // imgRef.src =
  //   e.target.parentNode.parentNode.nextSibling.firstChild.nextSibling.firstChild.nextSibling.dataset.source;
}

function closeModal(e) {
  modalRef.classList.remove("is-open");
  imgRef.src = "";
}

galleryRef.addEventListener("click", showModal);
modalRef.addEventListener("click", closeModal);

// window.addEventListener("keydown", () => {
//   console.log(event.code);
// });
//ArrowLeft
