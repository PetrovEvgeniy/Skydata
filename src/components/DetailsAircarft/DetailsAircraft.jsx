import React from 'react';
import aircraftService from '../../services/aircraft-service';
import { Image, Table } from 'react-bootstrap';
import CountryFlag from '../CountryFlag/CountryFlag';

class DetailsAircraft extends React.Component {
    state = {
        aircraft: null
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        aircraftService.load(id, null)
            .then((data) => this.setState({ aircraft: data }))
            .catch(err => console.log(err));

    }
    render() {
        const aircraft = this.state.aircraft;

        return (
            <div className="container">

                {aircraft ?
                    <div className="container">
                        <h1><small>{aircraft.type}:</small> {aircraft.name}</h1>
                        <Image src={aircraft.imageURL} fluid />
                        <div className="bg-dark text-light">{aircraft.description}</div>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Country:</th>
                                    <th>Top speed:</th>
                                    <th>Capacity:</th>
                                    <th>Price:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><CountryFlag countryName={aircraft.countryOfOrigin} /> {aircraft.countryOfOrigin}</td>
                                    <td>{aircraft.topSpeed}km/h</td>
                                    <td>{aircraft.capacity}</td>
                                    <td>{aircraft.price}€</td>
                                </tr>
                            </tbody>
                        </Table>

                        <small>Listed by: </small><strong>{aircraft.creator.username}</strong>

                    </div>

                    : <h1>Aircraft not found.</h1>}
            </div>
        );
    }
}

export default DetailsAircraft;