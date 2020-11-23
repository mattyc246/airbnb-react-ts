import React, { FunctionComponent } from 'react'
import styled from "styled-components"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
`

const LocationForm: FunctionComponent = () => {
  return (
    <FormContainer>
      <Form>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Where do you want to go?" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Check In Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Check Out Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>No. Of Guests</Form.Label>
          <Form.Control as="select" >
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">&gt; 5</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="success">Search</Button>
      </Form>
    </FormContainer>
  )
}

export default LocationForm
