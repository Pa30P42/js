import shop from "../components/shop.js";
import refs from "../components/refs.js";
import createPaginationMarkup from "../pagination/createPaginationMarkup.js";

const createPagination = () => {
  shop.pagination.totalProducts = shop.products.length;
  shop.pagination.pagesCount = Math.ceil(
    shop.pagination.totalProducts / shop.pagination.productsPerPage
  );
  refs.productPagination.innerHTML = createPaginationMarkup();
  getActivePage();
};

const getActivePage = () => {
  const pages = document.querySelectorAll(".paginationPageItem");
  pages[shop.pagination.currentPage - 1].classList.add(
    "activePaginationPageItem"
  );
};
export default createPagination;
