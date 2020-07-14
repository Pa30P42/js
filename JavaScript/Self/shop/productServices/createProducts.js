import getProducts from "../productServices/getProduct.js";
import refs from "../components/refs.js";
import createProductMarkup from "./createProduct.js";

const createProductsMarkup = () => {
  const markup = getProducts().reduce((acc, product) => {
    acc += createProductMarkup(product);
    return acc;
  }, "");
  refs.productList.innerHTML = markup;
};

export default createProductsMarkup;
