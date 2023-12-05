import products from '../data/products.js';
import { cart, generateCart } from '../data/cart.js';
import priceToUS from './utility/utility.js';

let productsHTML = '';

products.forEach((product) => {
  const {
    image, name, rating, priceCents, id,
  } = product;
  productsHTML += `
        <div class="product-container">
        <div class="product-image-container">
        <img class="product-image"
            src="${image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${name}
        </div>

        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="/images/ratings/rating-${rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
            ${rating.count}
        </div>
        </div>

        <div class="product-price">
        $${priceToUS(priceCents)}
        </div>

        <div class="product-quantity-container">
        <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary" data-product-id="${id}">
        Add to Cart
        </button>
    </div>`;
});

document.querySelector('.products-grid').innerHTML = productsHTML;

function orderQuantity() {
  let cartQuentity = 0;
  cart.forEach((item) => {
    cartQuentity += item.quentity;
  });
  document.querySelector('.cart-quantity').innerHTML = cartQuentity;
}

document.querySelectorAll('.add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const { productId } = button.dataset;
    generateCart(productId);
    orderQuantity();
  });
});
