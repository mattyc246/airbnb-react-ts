import React, { FormEvent, FunctionComponent, useContext, useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Listing } from '../interfaces/Listing'
import Axios from 'axios'
import { ListingContext } from '../context/listingContext'

interface EditFormProps {
  listing: Listing;
  handleClose: () => void;
}

const EditListingForm: FunctionComponent<EditFormProps> = ({ listing, handleClose }: EditFormProps) => {
  const [listingData, setListingData] = useState({
    name: listing.name,
    location: listing.location,
    price: listing.price,
    noOfGuests: listing.noOfGuests
  })
  const { fetchUserListings } = useContext(ListingContext)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    Axios.put(`http://localhost:3000/listings/${listing.id}`, listingData, {
      withCredentials: true
    })
    .then((res) => {
      handleClose()
      fetchUserListings()
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Group>
        <Form.Label>Listing Name</Form.Label>
        <Form.Control
          type="text"
          value={listingData.name}
          onChange={e => setListingData({...listingData, name: e.target.value})}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={listingData.location}
          onChange={e => setListingData({...listingData, location: e.target.value})}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={listingData.price}
          onChange={e => setListingData({...listingData, price: parseInt(e.target.value)})}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>No. Of Guests</Form.Label>
        <Form.Control
          type="number"
          value={listingData.noOfGuests}
          onChange={e => setListingData({...listingData, noOfGuests: parseInt(e.target.value)})}
        />
      </Form.Group>
      <Button type="submit" variant="success" block>Update Listing</Button>
    </Form>
  )
}

export default EditListingForm
