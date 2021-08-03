import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoginForm.scss';

function LoginForm() {
  return (
    <div>
      <Form className='container-md form-container'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Manager ID</Form.Label>
          <Form.Control type='email' placeholder='Manager ID' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <div className='d-grid gap-2'>
          <Button variant='outline-light' className='mt-2' size='lg'>
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;
