import React from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const LoginForm = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Registered email"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="Stay logged in?"/>
        </Form.Group>
        <Button className="mx-auto d-block" type="submit" variant="success">Login To Account</Button>
      </Form>
    </div>
  )
}

export default LoginForm
