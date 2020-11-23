import React, { FunctionComponent } from 'react'
import { NavLink } from "react-router-dom"
import isLogin from "../utils/isLogin"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Navigator: FunctionComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">CloneBNB</Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navi" />
      <Navbar.Collapse id="main-navi">
        <Nav className="ml-auto">
          {
            isLogin()
            ? (
              <>
                <Nav.Link as={NavLink} to="/listings">Listings</Nav.Link>
                <Nav.Link as={NavLink} to="/bookings">Bookings</Nav.Link>
                <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
              </>
            )
            : (
              <>
                <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              </>
            )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigator
