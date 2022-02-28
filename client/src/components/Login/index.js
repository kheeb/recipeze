//Login Component
import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function LogIn() {
  return (
    <Card>
      <Card.Header>ReciPeZe Log In</Card.Header>
      <Card.Body>
        <Card.Title>Please enter your Username and Password below</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default LogIn;

