import React, { FunctionComponent, useState } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Layout } from "../components"
import Axios from 'axios'
import { Booking } from '../interfaces/Booking'

const Bookings: FunctionComponent = () => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [bookingType, setBookingType] = useState<string>('personal')

  const handleFetchMyBookings = () => {
    Axios.get('http://localhost:3000/bookings/me', {
      withCredentials: true
    })
    .then((res) => {
      setBookings(res.data)
      setBookingType('personal')
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  const handleFetchMyListingsBookings = () => {
    Axios.get('http://localhost:3000/bookings/listings/me', {
      withCredentials: true
    })
    .then((res) => {
      setBookings(res.data)
      setBookingType('listings')
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  const handleCancellation = (id: number) => {
    Axios.delete(`http://localhost:3000/bookings/${id}`, {
      withCredentials: true
    })
    .then((res) => {
      if(bookingType === 'personal'){
        handleFetchMyBookings()
      } else {
        handleFetchMyListingsBookings()
      }
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  return (
    <Layout showFooter={true} padded={true}>
      <Container fluid>
        <h1>Bookings</h1>
        <Row>
          <Col xl={5}>
            <Card className="my-3 sticky-top" style={{top: '20px'}}>
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
                  <Button variant="dark" onClick={handleFetchMyListingsBookings}>My Listings</Button>
                  <Button variant="info" onClick={handleFetchMyBookings}>My Bookings</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={7}>
            <Row>
              <Col xs={12}>
                {
                  bookings.length > 1 ? (
                    bookings.map((booking) => {
                      const checkIn = new Date(booking.checkIn)
                      const checkOut = new Date(booking.checkOut)

                      return(
                        <Card key={booking.id} className="my-3 shadow-sm rounded">
                          <Card.Body className="d-flex justify-content-between align-items-center">
                            <div>
                              <p className="m-0">{booking.listing.name}</p>
                            </div>
                            <div>
                              <p className="m-0">
                                {`${checkIn.getUTCDate()}-${checkIn.getUTCMonth()}-${checkIn.getUTCFullYear()}`}
                                {' '}to{' '}
                                {`${checkOut.getUTCDate()}-${checkOut.getUTCMonth()}-${checkOut.getUTCFullYear()}`}
                                </p>
                            </div>
                            <div>
                              {
                                booking.paymentStatus === 'pending'
                                  ? (
                                    <>
                                      {
                                        bookingType === 'personal'
                                          ? <Button variant="warning">Pay Now</Button>
                                          : ''
                                      }
                                      <Button variant="danger" onClick={() => handleCancellation(booking.id)}>Cancel</Button>
                                    </>
                                  )
                                  : ''
                              }
                              {
                                booking.paymentStatus === 'paid'
                                  ? (
                                    <Button variant="danger" onClick={() => handleCancellation(booking.id)}>Cancel</Button>
                                  )
                                  : ''
                              }
                              {
                                booking.paymentStatus === 'cancelled'
                                  ? <Button variant="light" disabled>Cancelled</Button>
                                  : ''
                              }
                            </div>
                          </Card.Body>
                        </Card>
                      )
                    })
                  ) : (
                    <h3 className="text-center">No bookings to show.</h3>
                  )
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Bookings
