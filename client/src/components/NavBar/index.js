// NavBar Component
import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

<Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        alt="recipeze-logo"
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{" "}
      ReciPeZe
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#profile">Profile</Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Recipe Search..."
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Container>
</Navbar>;
