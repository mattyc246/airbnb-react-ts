import React, { FunctionComponent, useState } from 'react'
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import NewListingForm from './NewListingForm';

const NewListingModal: FunctionComponent = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="mr-auto" variant="outline-primary" onClick={handleShow}>
        + Add New Listing
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewListingForm handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NewListingModal
