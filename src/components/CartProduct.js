import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getProductData } from '../productsStore';

function CartProduct(props) {
  const cart = useContext(CartContext);
}

export default CartProduct;
