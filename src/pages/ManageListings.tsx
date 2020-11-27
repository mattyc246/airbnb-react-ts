import React, { useContext, useEffect } from 'react'
import Placeholder from "../assets/images/maldives.jpg"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Layout } from '../components'
import { ListingContext } from '../context/listingContext'
import Loader from '../components/Loader'
import Axios from 'axios'

const ManageListings = () => {
  const { listings, fetchUserListings, isLoadingListings} = useContext(ListingContext)

  useEffect(() => {
    fetchUserListings()
  }, [])

  const handleDelete = (id: number) => {
    Axios.delete(`http://localhost:3000/listings/${id}`, {
      withCredentials: true
    })
    .then((res) => {
      fetchUserListings()
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  return (
    <Layout showFooter={true} padded={true}>
      <Container fluid>
        <h1 className="my-4">Manage Listings</h1>
        {
          isLoadingListings
            ? <Loader />
            : (
              <Row>
                {
                  listings.map((listing) => {
                    return(
                      <Col key={`listing-${listing.id}`} md={3}>
                        <Card className="my-3 shadow-sm rounded">
                          <Card.Img variant="top" src={Placeholder} />
                          <Card.Body>
                            <Card.Title>{ listing.name }</Card.Title>
                            <Button variant="info" block>See Bookings</Button>
                            <div className="my-3 d-flex justify-content-between">
                              <Button variant="danger" onClick={() => handleDelete(listing.id)}>Delete</Button>
                              <Button variant="warning">Edit</Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    )
                  })
                }
              </Row>
            )
        }
      </Container>
    </Layout>
  )
}

export default ManageListings
