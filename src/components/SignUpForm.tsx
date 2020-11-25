import React, { FunctionComponent, useState, FormEvent } from 'react'
import { Redirect } from "react-router-dom"
import Axios from "axios"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

interface UserData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: FunctionComponent = () => {
  const [newUserData, setNewUserData] = useState<UserData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState<any[]>([])
  const [successfulSignUp, setSuccessfulSignUp] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrors([])

    const newErrors: any[] = []

    const {fullName, email, password, confirmPassword} = newUserData

    if(fullName && email && password && confirmPassword){
      if(password === confirmPassword){
        setSubmitting(true)

        let userData = {
          fullName,
          email,
          password
        }

        await Axios.post('http://localhost:3000/users', userData)
        .then(() => {
          setSuccessfulSignUp(true)
        })
        .catch(err => {
          newErrors.push(err.response.data.message)
          setSubmitting(false)
          setErrors(newErrors)
        })
      } else {
        newErrors.push('Passwords do not match')
        setErrors(newErrors)
      }
    } else {
      newErrors.push('Please complete all fields')
      setErrors(newErrors)
    }

  }

  if(successfulSignUp){
    return <Redirect to="/login" />
  }

  return (
    <Card className="shadow rounded py-5">
      <Card.Body>
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              value={newUserData.fullName}
              onChange={(e) => setNewUserData({...newUserData, fullName: e.target.value})}
              placeholder="Provide full legal name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={newUserData.email}
              onChange={(e) => setNewUserData({...newUserData, email: e.target.value})}
              placeholder="Provide valid email address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={newUserData.password}
              onChange={(e) => setNewUserData({...newUserData, password: e.target.value})}
              placeholder="Min 6 Characters"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={newUserData.confirmPassword}
              onChange={(e) => setNewUserData({...newUserData, confirmPassword: e.target.value})}
              placeholder="Confirm password"
              />
          </Form.Group>
          {
            submitting
              ? (<p className="text-center mb-4">Registering...</p>)
              : errors.length > 0
                ? (
                  <ul>
                    {
                      errors.map((error) => {
                        return <li key={`error-${error}`}>{error}</li>
                      })
                    }
                  </ul>
                )
                : ''
          }
          <Button
            className="mx-auto d-block"
            type="submit"
            variant="success"
            {...submitting ? {disabled: true} : {disabled: false}}
          >
            Register Account
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default SignUpForm
