import React, { FormEvent, FunctionComponent, useState } from 'react'
import Axios from "axios"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Listing } from '../interfaces/Listing'
import { useHistory } from 'react-router-dom'

interface FormProps {
  listing: Listing
}

const NewBookingForm: FunctionComponent<FormProps> = ({ listing }: FormProps) => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    noOfGuests: 0
  })

  const history = useHistory()

  const dateDiffInDays = (a: string, b: string) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    const checkIn = new Date(a)
    const checkOut = new Date(b)

    const utc1 = Date.UTC(checkIn.getFullYear(), checkIn.getMonth(), checkIn.getDate());
    const utc2 = Date.UTC(checkOut.getFullYear(), checkOut.getMonth(), checkOut.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const { checkIn, checkOut, noOfGuests } = bookingData

    if(checkIn && checkOut && noOfGuests > 0){
      Axios.post(`http://localhost:3000/bookings/${listing.id}`, bookingData, {
        withCredentials: true
      })
      .then((res) => {
        if(res.status === 201){
          history.push('/dashboard')
        }
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Group>
        <Form.Label>Check In Date</Form.Label>
        <Form.Control
          type="date"
          value={bookingData.checkIn}
          onChange={e => setBookingData({...bookingData, checkIn: e.target.value})}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Check Out Date</Form.Label>
        <Form.Control
          type="date"
          value={bookingData.checkOut}
          onChange={e => setBookingData({...bookingData, checkOut: e.target.value})}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>No Of Guests</Form.Label>
        <Form.Control
          type="number"
          placeholder="No. Of Guests"
          value={bookingData.noOfGuests}
          onChange={e => setBookingData({...bookingData, noOfGuests: parseInt(e.target.value)})}
        />
      </Form.Group>
      {
        bookingData.checkIn !== '' && bookingData.checkOut !== ''
          ? (
            <p className="my-3">
              Estimate Price: ${(listing.price * dateDiffInDays(bookingData.checkIn, bookingData.checkOut)) / 100}
            </p>
          )
          : ''
      }
      <Button type="submit" className="mx-auto d-block" variant="success">Book Now</Button>
    </Form>
  )
}

export default NewBookingForm
