import React, { useContext } from 'react'
import Axios from "axios"
import RightArrow from '../assets/images/arrow-right.png'
import styled from 'styled-components'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Layout } from "../components"
import { Link } from "react-router-dom"
import { UserContext } from '../context/userContext'

const StyledBody = styled(Card.Body)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4rem 1.5rem;

  h3 {
    margin: 0;
  }
`

const Dashboard = () => {
  const { user, updateUser } = useContext(UserContext)

  const handleLogout: any = () => {
    Axios.post('http://localhost:3000/logout', {}, {
      withCredentials: true
    })
    .then(() => {
      updateUser({
        fullName: '',
        email: '',
        isAuthenticated: false
      })
    })
  }

  return (
    <Layout showFooter={false} padded={true}>
      <h1 className="text-center my-4">Welcome back, {user.fullName}!</h1>
      <Container>
        <Row className="justify-content-center">
          <Col className="my-4" lg={6}>
            <Card className="shadow-sm rounded" as={Link} to="/listings">
              <StyledBody>
                <div className="w-75 text-center">
                  <h3>Show Listings</h3>
                </div>
                <div className="w-25">
                  <img className="w-25 mx-auto d-block" src={RightArrow} alt="right arrow"/>
                </div>
              </StyledBody>
            </Card>
          </Col>
          <Col className="my-4" lg={6}>
            <Card className="shadow-sm rounded" as={Link} to="/listings/manage">
              <StyledBody>
                <div className="w-75 text-center">
                  <h3>Manage Listings</h3>
                </div>
                <div className="w-25">
                  <img className="w-25 mx-auto d-block" src={RightArrow} alt="right arrow"/>
                </div>
              </StyledBody>
            </Card>
          </Col>
          <Col className="my-4" lg={6}>
            <Card className="shadow-sm rounded" as={Link} to="/bookings">
              <StyledBody>
                <div className="w-75 text-center">
                  <h3>Show Bookings</h3>
                </div>
                <div className="w-25">
                  <img className="w-25 mx-auto d-block" src={RightArrow} alt="right arrow"/>
                </div>
              </StyledBody>
            </Card>
          </Col>
          <Col className="my-4" lg={6}>
            <Card className="shadow-sm rounded" as={Link} to="/bookings/manage">
              <StyledBody>
                <div className="w-75 text-center">
                  <h3>Manage Bookings</h3>
                </div>
                <div className="w-25">
                  <img className="w-25 mx-auto d-block" src={RightArrow} alt="right arrow"/>
                </div>
              </StyledBody>
            </Card>
          </Col>
          <Col className="my-4" lg={6}>
            <Card className="shadow-sm rounded" as={Link} to="/profile/manage">
              <StyledBody>
                <div className="w-75 text-center">
                  <h3>Update Profile</h3>
                </div>
                <div className="w-25">
                  <img className="w-25 mx-auto d-block" src={RightArrow} alt="right arrow"/>
                </div>
              </StyledBody>
            </Card>
          </Col>
        </Row>
        <Button onClick={handleLogout} variant="danger" size="lg" block>Logout</Button>
      </Container>
    </Layout>
  )
}

export default Dashboard
