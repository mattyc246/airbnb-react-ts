import React, {FunctionComponent, useState} from 'react'
import { Listing } from '../interfaces/Listing'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import EditListingForm from './EditListingForm'

interface EditListingProps {
  listing: Listing;
}

const EditListingModal: FunctionComponent<EditListingProps> = ({ listing }: EditListingProps) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {listing.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditListingForm listing={listing} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EditListingModal
