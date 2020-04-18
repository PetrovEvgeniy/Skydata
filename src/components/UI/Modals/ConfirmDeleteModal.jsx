import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import aircraftService from '../../../services/aircraft-service'

const DeleteModal = (props) => {
    let aircraftName = props.aircraft ? props.aircraft.name : ''

    const ConfirmDeleteHandler = () => {
        aircraftService.delete(props.aircraft._id)
        .then(aircraft => {
            props.onDeleteFinish()
        })
        .catch(error => console.log(error))
    }

    return ( <Modal show={props.show} onHide={props.onDeleteCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete</Modal.Title>
        </Modal.Header>
            <Modal.Body>Are you sure that you want to delete the aircraft <strong>{aircraftName}</strong>?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onDeleteCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={ConfirmDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal> );
}
 
export default DeleteModal;