// eslint-disable-next-line import/no-mutable-exports
export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  cart = [
    {
      id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quentity: 2,
      deliveryOptionId: '1',
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

export function generateCart(productId) {
  let matchingItem;
  cart.forEach((item) => {
    if (item.id === productId) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quentity += 1;
  } else {
    cart.push({
      id: productId,
      quentity: 1,
      deliveryOptionId: '1',
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
