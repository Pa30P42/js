import axios from 'axios';
import { products } from '../products';

const API_KEY = "AIzaSyAAYIxblmS4RC1D5P88p075MgGD1OC3OK0";

export const productForm = () => {
  return `
  <div class="backDrop">
    <form name="productForm" class="productForm">
      <input type="text" name="name" class="productFormInput" placeholder="name"/>
      <textarea name="description" cols="30" rows="10" class="productFormArea" placeholder="description"></textarea>
      <input type="text" name="image" class="productFormInput" placeholder="image"/>
      <input type="number" name="price" class="productFormInput" placeholder="price"/>
      <button type="submit" class="button productFormButton" >Add product</button>
    </form>
  </div>
  `
}

export const profilePage = () => {
  const product = {
    name: '',
    description: '',
    image: '',
    price: 0
  }

  const refs = {
    productForm: document.querySelector('.productForm'),
  }

  const getProductInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    product[name] = value;
  }


  const addNewProduct = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('user')).token;
    axios.post(`https://lastlesson-2775c.firebaseio.com/products.json?auth=${token}`, product)
      .then(response => products.productsItems = [...products.productsItems, { ...product, id: response.data.name }])
      .then(() => {
        refs.productForm.reset();
        product.name = "";
        product.description = "";
        product.image = "";
        product.price = 0;

      })
  }


  refs.productForm.addEventListener('input', getProductInfo)
  refs.productForm.addEventListener('submit', addNewProduct)



}


