import React, { FunctionComponent } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Layout } from "../components"

const Listings: FunctionComponent = () => {
  return (
    <Layout showFooter={true} padded={true}>
      <Container fluid>
        <Row>
          <Col lg={3}>
            <Card className="my-3 sticky-top" style={{top: '1rem'}}>
              <Card.Body>
                <h5>Filter:</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={9}>
            <Row>
              {
                [1,2,3,4,5,6,7,8,9,10,11,12].map((key) => {
                  return(
                    <Col key={key} xs={12} sm={6} xl={3}>
                      <Card className="my-3 shadow-sm rounded">
                        <Card.Img variant="top" src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE" />
                        <Card.Body>
                          <Card.Title>Listing Name</Card.Title>
                          <Card.Subtitle>Location</Card.Subtitle>
                          <Card.Text>Price | Rating | Guest</Card.Text>
                          <Button variant="info">Book Now</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Listings
