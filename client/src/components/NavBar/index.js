// NavBar Component
//Navbar
import React from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';

function NavBar() {
  return (
    <div className="NavBar">
      <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
  <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      ReciPeZe
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#login">Log In</Nav.Link>
        <Nav.Link href="#signup">Sign Up</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Recipe Search..."
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Go!</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

export default NavBar;
