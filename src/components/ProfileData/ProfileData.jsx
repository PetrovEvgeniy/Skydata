import React from 'react';
import userService from '../../services/user-service';
import { Image,ListGroup } from 'react-bootstrap';


class ProfileData extends React.Component {
    state = {
        user: null,
        aircraftCount: 0,
        aircraft: []
    }

    componentDidMount() {

        userService.get()
            .then((users) => users.find(e => e.username === this.props.username))
            .then((user) => this.setState({
                user,
                aircraftCount: user.createdAircraft.length,
                aircraft: user.createdAircraft
            }));
    }
    render() {
        const username = this.props.username;
        const aircraftCount = this.state.aircraftCount;
        const aircraft = this.state.aircraft;
        return (
            <div className="container">
                <Image className="height-20" roundedCircle src="http://www.aerojetvirtual.com/vam/uploads/pilot_default.png" alt="Profile avatar" />
                <h3><u>{username}</u></h3>
                <h3>Created aircraft: {aircraftCount}</h3>
                <hr />
        {aircraft ? <ListGroup defaultActiveKey="#link1"> {aircraft.map(a => <ListGroup.Item key={a._id} action href={"/aircraft/details/" + a._id}>{a.name}</ListGroup.Item>)}</ListGroup>
                    : <span>No data</span>}

            </div>
        );
    }
}

export default ProfileData;