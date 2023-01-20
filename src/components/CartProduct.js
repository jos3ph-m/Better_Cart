import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getProductData } from '../productsStore';

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
}

export default CartProduct;
