import axios from 'axios';
import { products } from '../products';


const refs = {
  content: document.querySelector('.content'),
}

const getProducts = () => {
  return axios.get('https://lastlesson-2775c.firebaseio.com/products.json')
    .then(response => {
      const data = []
      for (const key in response.data) {
        data.push({ id: key, ...response.data[key] })
      }
      products.productsItems = [...data];
      return products.productsItems
    });
}

const createProductsItemMarkup = (product) => {
  return `
  <li class="productsListItem" data-id=${product.id}>
  <h2 class="productsListItemName">${product.name}</h2>
  <img src=${product.image} alt=${product.name} class="productsListItemImage"/>
  <p class="productsListItemDescription">Description: ${product.description}</p>
  <p class="productsListItemPrice"> Price: ${product.price}</p>
  <button class="button productsListItemButton">Add to cart</button>
  </li>
  `
}

const createProductsMarkup = (array) => {
  const markup = array.reduce((acc, product) => {
    acc += createProductsItemMarkup(product)
    return acc
  }, '')
  return `<ul class="productsList">${markup}</ul>`
}




export const productsPage = async () => {
  const result = await getProducts().then(data => createProductsMarkup(data));
  refs.content.innerHTML = result;

}







