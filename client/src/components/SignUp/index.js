//SignUp
import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function SignUp() {
  return (
    <Card>
      <Card.Header>ReciPeZe Sign Up</Card.Header>
      <Card.Body>
        <Card.Title>Please choose your Username and Password below</Card.Title>
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

export default SignUp;
