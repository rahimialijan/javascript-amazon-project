import { cart, removeOrderedItem } from "../data/cart.js";
import products from "../data/products.js";
import { priceToUS } from "./utility/utility.js";


let matchingItems = [];

products.forEach((product) => {
  cart.forEach((cartItem) => {
    if (product.id === cartItem.id) {
      matchingItems.push({
        product: product,
        quantity: cartItem.quentity,
        ordercartId: cartItem.id,
      });
    }
  });
});

let orderCartsHTML = "";

matchingItems.forEach((orderCart) => {
  orderCartsHTML += `
    <div class="cart-item-container cart-order-container-${orderCart.product.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${orderCart.product.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${orderCart.product.name}
        </div>
        <div class="product-price">
          $${priceToUS(orderCart.product.priceCents)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">
            ${orderCart.quantity}
            </span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary" data-ordercart-id ="${orderCart.product.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${orderCart.product.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${orderCart.product.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${orderCart.product.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
});

document.querySelector('.order-summary').innerHTML = orderCartsHTML;


document.querySelectorAll('.delete-quantity-link').forEach((deleteBTN)=>{
  deleteBTN.addEventListener('click', ()=>{
      const {ordercartId} = deleteBTN.dataset
      removeOrderedItem(ordercartId)
      const cartContainer = document.querySelector(`.cart-order-container-${ordercartId}`);
      cartContainer.remove()
  })
})