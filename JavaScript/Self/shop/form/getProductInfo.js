import shop from "../components/shop.js";

const getProductInfo = (e) => {
  shop.product[e.target.name] = e.target.value;
};

export default getProductInfo;
