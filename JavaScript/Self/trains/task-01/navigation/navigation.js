import { productsPage } from "../pages/productsPage.js";
import { cart } from "../pages/cartPage.js";

export const navigaiton = () => {
  const content = document.querySelector(".content");
  const navRef = document.querySelector(".navList");
  const activatedLink = document.querySelector(".navItem a");
  activatedLink.classList.add("navItemActiveLink");

  getContent(activatedLink);

  const activateLink = function (e) {
    e.preventDefault();
    if (e.target.nodeName === "A") {
      const activeLink = navRef.querySelector(".navItemActiveLink");

      activeLink && activeLink.classList.remove("navItemActiveLink");

      e.target.classList.add("navItemActiveLink");

      getContent(e.target);
    } else return;
  };

  function getContent(link) {
    const activeLink = link.dataset.nav;

    switch (activeLink) {
      case "products":
        productsPage(content);
        break;
      case "cart":
        cart(content);
        break;

      default:
        productsPage(content);
        break;
    }
  }

  navRef.addEventListener("click", activateLink);
};
