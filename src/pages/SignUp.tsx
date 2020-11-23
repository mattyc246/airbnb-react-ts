import React from 'react'
import Vacation from "../assets/images/vacation.png"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Layout, SignUpForm } from "../components"

const SignUp = () => {
  return (
    <Layout showFooter={true}>
      <Container fluid>
        <Row>
          <Col lg={7}>
            <SignUpForm />
          </Col>
          <Col className="py-4" lg={5}>
            <h3 className="text-center">Sign up to start renting/booking today</h3>
            <img className="mx-auto d-block" src={Vacation} alt="vacation"/>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SignUp
