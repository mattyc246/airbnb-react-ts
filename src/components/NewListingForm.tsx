import React, { FormEvent, FunctionComponent, useContext, useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Axios from 'axios'
import { ListingContext } from '../context/listingContext'

interface ListingStateData {
  name: string;
  location: string;
  price: number;
  noOfGuests: number;
}

interface Props {
  handleClose: () => void
}

const NewListingForm: FunctionComponent<Props> = ({ handleClose }: Props) => {
  const [listingData, setListingData] = useState<ListingStateData>({
    name: '',
    location: '',
    price: 0,
    noOfGuests: 0
  })
  const { fetchListings } = useContext(ListingContext)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    Axios.post('http://localhost:3000/listings', listingData, {
      withCredentials: true
    })
    .then((res) => {
      handleClose()
      setListingData({
        name: '',
        location: '',
        price: 0,
        noOfGuests: 0
      })
      fetchListings()
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
          placeholder="Enter listing name"
          value={listingData.name}
          onChange={e => setListingData({...listingData, name: e.target.value})}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter location address"
          value={listingData.location}
          onChange={e => setListingData({...listingData, location: e.target.value})}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Amount in smallest value i.e. 100 = $1"
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
      <Button type="submit" className="mx-auto d-block" variant="success">Submit Listing</Button>
    </Form>
  )
}

export default NewListingForm
