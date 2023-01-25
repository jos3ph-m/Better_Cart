import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';

function Store() {
  return (
    <>
      <h1 align="center" className="p-3">
        The Coffee, Sunglasses and Camera Store 2.0
      </h1>
      <p align="center" className="p-3">
        Add items to your cart and purchase them. If you don't we don't make
        money.
      </p>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, index) => (
          <Col align="center" key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
