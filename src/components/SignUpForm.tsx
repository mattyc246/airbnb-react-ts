import React, { FunctionComponent } from 'react'
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const SignUpForm: FunctionComponent = () => {
  return (
    <Card className="shadow rounded py-5">
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Provide full legal name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Provide valid email address" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="email" placeholder="Min 6 Characters" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="email" placeholder="Confirm password" />
          </Form.Group>
          <Button className="mx-auto d-block" type="submit" variant="success">Register Account</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default SignUpForm
