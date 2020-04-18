import React, {Fragment} from 'react';
import userService from '../../services/user-service';
import Spinner from '../UI/Spinner/Spinner';
import DeleteModal from '../UI/Modals/ConfirmDeleteModal';
import EditModal from '../UI/Modals/EditAircraftModal';
import {Button, Col,Row, Image, Card, CardGroup} from 'react-bootstrap';


class ProfileData extends React.Component {
    state = {
        user: null,
        aircraftCount: 0,
        aircraft: [],
        selectedAircraft: null,
        loading: false,
        showDeleteModal: false,
        showEditModal: false
    }

    loadData() {
        this.setState({loading: true})
        userService.getOne()
        .then((user) => this.setState({
            user,
            aircraftCount: user.createdAircraft.length,
            aircraft: user.createdAircraft,
            loading: false
        }))
        .catch(err => {
            this.setState({loading: false})
        });
    }

    componentDidMount() {
       this.loadData()
    }

    onDeleteStartHandler(aircraft){
        this.setState({showDeleteModal: true, selectedAircraft: {...aircraft}})
    }

    onDeleteCancelHandler = () => {
        this.setState({showDeleteModal: false})
    }
    onDeleteFinishHandler = () => {
        this.setState({showDeleteModal: false})
        this.loadData()
    }

    onEditStartHandler(aircraft){
        this.setState({showEditModal: true, selectedAircraft: {...aircraft}})
    }
    onEditCancelHandler = () => {
        this.setState({showEditModal: false})
    }

    onEditFinishHandler = () => {
        this.setState({showEditModal: false})
        this.loadData()
    }
    render() {

        let data = <Spinner/>
        let aircraftCount = this.state.aircraftCount;
        let aircraft = this.state.aircraft;
        
        if(!this.state.loading && this.state.user != null){
            data = (<Fragment>
            <Image roundedCircle src="http://www.aerojetvirtual.com/vam/uploads/pilot_default.png" fluid alt="Profile avatar" />
            <h3><u>{this.state.user.username}</u></h3>
            <h3>Created aircraft: {aircraftCount}</h3>
            <hr />
            <DeleteModal 
            show={this.state.showDeleteModal} 
            onDeleteFinish={this.onDeleteFinishHandler} 
            onDeleteCancel={this.onDeleteCancelHandler}
            aircraft={this.state.selectedAircraft}
            />
            <EditModal
            show={this.state.showEditModal}
            onEditFinish={this.onEditFinishHandler}
            onEditCancel={this.onEditCancelHandler}
            aircraft={this.state.selectedAircraft}
            />
            {aircraft ? <CardGroup>{aircraft.map(a =>
                <Card key={a._id} bg="dark" text="white" border="white">
                    <Card.Img variant="top" src={a.imageURL} />
                     <Card.Body>
                        <Card.Title>
                            {a.name}
                        </Card.Title>
                        <Row> 
                        <Col>
                            <Button variant="primary" href={`aircraft/details/${a._id}`}>DETAILS</Button>
                        </Col>
                        <Col>
                            <Button variant="secondary" onClick={() => this.onEditStartHandler(a)}>EDIT</Button>
                        </Col> 
                        <Col>
                            <Button variant="danger" onClick={() => this.onDeleteStartHandler(a)}>DELETE</Button>
                        </Col>
                        </Row>


                    </Card.Body>
                </Card>                  
                )}
            </CardGroup>
                : null}
            {aircraftCount === 0 ? <span>Please add an aircraft to display it here.</span> : null}
                </Fragment>)
        }

        return (
            <div className="container">
                {data}
            </div>
        );
    }
}

export default React.memo(ProfileData);