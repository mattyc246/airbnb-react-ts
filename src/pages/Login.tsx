import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import { Layout, LoginForm } from "../components"

const Login = () => {
  return (
    <Layout showFooter={true} padded={false}>
      <Container fluid>
        <Row className="py-5">
          <Col lg={{span: 8, offset: 2}}>
            <Card className="shadow rounded py-5">
              <Card.Body>
                <h2 className="text-center">Login to your account</h2>
                <LoginForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Login
