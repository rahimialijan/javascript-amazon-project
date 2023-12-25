// eslint-disable-next-line import/no-mutable-exports
export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  cart = [
    {
      id: '54e0eccd-8f36-462b-b68a-8182611d9add',
      quentity: 2,
      deliveryOptionId: '2',
    },
    {
      id: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quentity: 1,
      deliveryOptionId: '2',
    },
  ];
}

function saveToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
 console.log(cart)
export function generateCart(productId) {
  /*
  let matchingItem;
  cart.forEach((item) => {
    if (item.id === productId) {
      matchingItem = item;
    }
  });
  */
  let matchingItem = cart.find((item) => item.id ===productId)
  if (matchingItem) {
    matchingItem.quentity += 1;
  } else {
    cart.push({
      id: productId,
      quentity: 1,
      deliveryOptionId: '3',
    });
  }
  saveToLocalStorage();
}

export function removeOrderedItem(ordercartId) {
  const newCart = [];
  cart.forEach((item) => {
    if (item.id !== ordercartId) {
      newCart.push(item);
    }
  });

  cart = newCart;
  saveToLocalStorage();
}



export function updateDeliveryOption(productId, deliveryOptionId) {
  const matchingItem = cart.find((item) => item.id === productId);

  if (matchingItem) {
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToLocalStorage();
  }
}