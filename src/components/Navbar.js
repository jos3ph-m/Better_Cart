import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { useState } from 'react';

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>This is the Modal body</h1>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
