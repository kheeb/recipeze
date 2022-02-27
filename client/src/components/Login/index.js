//Login Component
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap";

function LogIn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Title>ReciPeZe Log In </Modal.Title>
        <Modal.Body>
          <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col>
                <p>Please enter your Username and Password below</p>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Form>
                <Form.Group
                  className="mb-3 text-center"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </Form>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogIn;
