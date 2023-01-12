const productsArray = [
  {
    id: 1,
    name: 'Coffee',
    price: 4.99,
  },
  {
    id: 2,
    name: 'Sunglasses',
    price: 13.99,
  },
  {
    id: 3,
    name: 'Camera',
    price: 66.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  if (productData == undefined) {
    console.log('Product data does not exist for ID: ' + id);
    return undefined;
  }

  return productData;
}

export { productsArray };
