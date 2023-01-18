import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) {
  // props.product is the product we are selling
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button sm="6" className="mx-2">
                  +
                </Button>
                <Button sm="6" className="mx-1">
                  -
                </Button>
              </Col>
            </Form>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
