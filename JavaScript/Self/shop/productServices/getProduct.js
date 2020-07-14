import shop from "../components/shop.js";

const getProducts = () => {
  const finish = shop.pagination.productsPerPage * shop.pagination.currentPage; //7
  const start = finish - shop.pagination.productsPerPage; //4
  const products = shop.products.slice(start, finish);
  //   console.log(products);
  return products;
};

export default getProducts;
