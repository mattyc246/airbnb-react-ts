import React, { FunctionComponent, useContext, useEffect } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Layout } from "../components"
import NewListingModal from '../components/NewListingModal'
import { UserContext } from '../context/userContext'
import { ListingContext } from '../context/listingContext'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const Listings: FunctionComponent = () => {
  const { user } = useContext(UserContext)
  const { listings, fetchListings, isLoadingListings } = useContext(ListingContext)

  useEffect(() => {
    fetchListings()
  }, [])

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
            {
              isLoadingListings
                ? <Loader />
                :(
                  <>
                    {
                      user.isAuthenticated
                        ? <NewListingModal />
                        : ''
                    }
                    <Row>
                      {
                        listings.map((listing, idx) => {
                          if(listing.user.email !== user.email){
                            return(
                              <Col key={`listing-${listing.id}`} xs={12} sm={6} xl={4}>
                                <Card className="my-3 shadow-sm rounded">
                                  <Card.Img variant="top" src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE" />
                                  <Card.Body>
                                    <Card.Title>{ listing.name }</Card.Title>
                                    <Card.Subtitle className="my-2">{ listing.location }</Card.Subtitle>
                                    <hr />
                                    <Card.Text className="d-flex justify-content-between">
                                      <span className="badge badge-info">${ listing.price / 100 } p/n</span>
                                      <span className="badge badge-info">5.0 Rating</span>
                                      <span className="badge badge-info">{ listing.noOfGuests } Guests</span>
                                    </Card.Text>
                                    <hr />
                                    <Button
                                      as={Link}
                                      to={`/listings/${listing.id}`}
                                      variant="warning" block>
                                        Book Now
                                    </Button>
                                  </Card.Body>
                                </Card>
                              </Col>
                            )
                            return ''
                          }
                        })
                      }
                    </Row>
                  </>
                )
            }
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Listings
