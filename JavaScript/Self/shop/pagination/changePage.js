import shop from "../components/shop.js";
import createProductsMarkup from "../productServices/createProducts.js";
import createPagination from "./createPagination.js";

const changePage = (e) => {
  shop.pagination.currentPage = e.target.dataset.page;
  createProductsMarkup();
  createPagination();
};

export default changePage;
