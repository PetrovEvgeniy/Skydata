import React from 'react';
import {Modal } from 'react-bootstrap';
import AircraftForm from '../../Forms/AircraftForms/EditAircraftFrorm'

const EditModal = (props) => {

    return ( <Modal show={props.show} onHide={props.onEditCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Edit aircraft</Modal.Title>
        </Modal.Header>
        <Modal.Body>    
            <AircraftForm
            aircraft={props.aircraft}
            onEditCancel={props.onEditCancel}
            onEditFinish={props.onEditFinish}
            />
        </Modal.Body>
      </Modal> );
}
 
export default EditModal;