import React, { FunctionComponent } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Layout } from "../components"

const Bookings: FunctionComponent = () => {
  return (
    <Layout showFooter={true} padded={true}>
      <Container fluid>
        <h1>Bookings</h1>
        <Row>
          <Col xl={5}>
            <Card className="my-3">
              <Card.Body>
                <h5>Choose status:</h5>
                <div className="d-flex justify-content-between">
                  <Button variant="success">Complete</Button>
                  <Button variant="warning">Pending</Button>
                  <Button variant="danger">Cancelled</Button>
                </div>
                <hr/>
                <h5>Choose listings or bookings:</h5>
                <div className="d-flex justify-content-between">
                  <Button variant="dark">My Listings</Button>
                  <Button variant="info">My Bookings</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={7}>
            <Row>
              <Col xs={12}>
                <Card className="my-3 shadow-sm rounded">
                  <Card.Body>

                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Bookings
