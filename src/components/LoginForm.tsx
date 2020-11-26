import React, { useState, FormEvent, useContext } from 'react'
import Axios from "axios"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { UserContext } from '../context/userContext'

interface LoginData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [userData, setUserData] = useState<LoginData>({
    email: '',
    password: ''
  })

  const { updateUser } = useContext(UserContext)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    Axios.post('http://localhost:3000/login', userData, {
      withCredentials: true
    })
    .then((res) => {
      updateUser({
        fullName: res.data.fullName,
        email: res.data.email,
        isAuthenticated: true
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          value={userData.email}
          onChange={e => setUserData({...userData, email: e.target.value})}
          placeholder="Registered email"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={userData.password}
          onChange={e => setUserData({...userData, password: e.target.value})}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check type="checkbox" label="Stay logged in?"/>
      </Form.Group>
      <Button className="mx-auto d-block" type="submit" variant="success">Login To Account</Button>
    </Form>
  )
}

export default LoginForm
