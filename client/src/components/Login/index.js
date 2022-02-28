//Login Component
import React, { useState } from "react";

import Auth from '../../utils/auth';

import { Card, Button, Form, Alert } from "react-bootstrap";

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';



function LogIn() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      {data ? (
        <p>Success! You may now head back to the homepage.</p>
      ) : (
        <Card>
          <Card.Header>ReciPeZe Log In</Card.Header>
          <Card.Body>
            <Card.Title>
              Please enter your Username and Password below
            </Card.Title>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
              <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
              </Form.Group>
              <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default LogIn;
