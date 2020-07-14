import createProductMarkup from "../productServices/createProduct.js";
import createPagination from "../pagination/createPagination.js";
import createProductsMarkup from "../productServices/createProducts.js";
import shop from "../components/shop.js";
import refs from "../components/refs.js";

const addProduct = (e) => {
  e.preventDefault();
  const newProduct = { ...shop.product, id: `${Date.now()}` };
  shop.products = [newProduct, ...shop.products];
  refs.productForm.reset();
  shop.product.name = "";
  shop.product.price = 0;
  refs.productList.insertAdjacentHTML(
    "afterbegin",
    createProductMarkup(newProduct)
  );

  createPagination();
  createProductsMarkup();
};

export default addProduct;
