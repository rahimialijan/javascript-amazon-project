export const cart = [];


export function generateCart(productId){
    let matchingItem;
    cart.forEach((item) => {
      if (item.productId === productId) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quentity += 1;
    } else {
      cart.push({
        productId,
        quentity: 1,
      });
    }
}

