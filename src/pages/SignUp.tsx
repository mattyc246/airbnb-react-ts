import React, { FunctionComponent } from 'react'
import Vacation from "../assets/images/vacation.png"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Layout, SignUpForm } from "../components"

const SignUp: FunctionComponent = () => {
  return (
    <Layout showFooter={true}>
      <Container fluid>
        <Row className="py-4">
          <Col lg={{span: 5, order: 2}}>
            <h3 className="text-center">Sign up to start renting/booking today</h3>
            <img className="mx-auto d-block" src={Vacation} alt="vacation"/>
          </Col>
          <Col lg={{span: 7, order: 1}}>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SignUp
