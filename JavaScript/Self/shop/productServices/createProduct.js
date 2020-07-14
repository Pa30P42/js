const createProductMarkup = (product) => {
  return `
    <li class="productListItem" data-id=${product.id}>
        <h2 class="productListItemTitle">${product.name}</h2>
        <p class="productListItemPrice">${product.price}</p>
        <button type="button">Add to cart</button>
        </li>
    `;
};

export default createProductMarkup;
