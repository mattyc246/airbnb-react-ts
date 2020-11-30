import Axios from 'axios'
import Holiday from "../assets/images/maldives.jpg"
import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Badge from 'react-bootstrap/Badge'
import { Redirect, useParams } from 'react-router-dom'
import { Layout } from '../components'
import { Listing } from '../interfaces/Listing'
import NewBookingForm from '../components/NewBookingForm'

interface ParamType {
  id: string;
}

const BookListing = () => {
  const { id } = useParams<ParamType>()
  const [listing, setListing] = useState<Listing | null>(null)

  useEffect(() => {
    Axios.get(`http://localhost:3000/listings/${id}`, {
      withCredentials: true
    })
    .then((res) => {
      setListing(res.data)
    })
    .catch(() => {
      return <Redirect to="/listings" />
    })
  }, [])

  return (
    <Layout showFooter={true} padded={true}>
      {
        listing ? (
          <Container fluid>
            <Row>
              <Col md={8}>
                <img className="w-100 rounded" src={Holiday} alt="holiday" />
                <h2 className="my-3">{listing.name}</h2>
                <div className="d-flex justify-content-between py-3">
                  <div className="d-flex">
                    Price: <Badge className="ml-4" variant="info">${listing.price / 100} Per Night</Badge>
                  </div>
                  <div className="d-flex">
                    Avg Rating: <Badge className="ml-4" variant="info">5.0</Badge>
                  </div>
                  <div className="d-flex">
                    No. Of Guests: <Badge className="ml-4" variant="info">Up to {listing.noOfGuests} Guests</Badge>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <Card className="shadow-sm rounded">
                  <Card.Body>
                    <Card.Title>Book Now</Card.Title>
                    <NewBookingForm listing={listing}/>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        ) : ""
      }
    </Layout>
  )
}

export default BookListing
