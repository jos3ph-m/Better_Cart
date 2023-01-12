import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productsStore';

function Store() {
  return (
    <>
      <h1>Welcome to the store!</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map(product, index) => (
          <Col align="center">
            <h1>${product.name}</h1>
          </Col>
        )}
        
      </Row>
    </>
  );
}

export default Store;
