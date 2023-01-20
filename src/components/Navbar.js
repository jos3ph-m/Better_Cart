import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';

function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {productsCount == 1 ? (
            <Button onClick={handleShow}>Cart {productsCount} Item</Button>
          ) : (
            <Button onClick={handleShow}>Cart {productsCount} Items</Button>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, index) => (
                <h1>{currentProduct.id}</h1>
              ))}
              <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success">Purchase items</Button>
            </>
          ) : (
            <h1>There are no items in your cart</h1>
          )}
          <h1>This is the Modal body</h1>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
