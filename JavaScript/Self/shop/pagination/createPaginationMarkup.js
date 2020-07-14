import createPaginationPage from "../pagination/createPaginationPage.js";
import shop from "../components/shop.js";

const createPaginationMarkup = () => {
  let markup = "";
  for (let i = 1; i <= shop.pagination.pagesCount; i += 1) {
    markup += createPaginationPage(i);
  }
  return markup;
};

export default createPaginationMarkup;
