export const cart = [
  {
    id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quentity: 2
},
{
  id: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quentity: 1
},

{
  id: '8c9c52b5-5a19-4bcb-a5d1-158a74287c53',
  quentity: 3
},

];


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

