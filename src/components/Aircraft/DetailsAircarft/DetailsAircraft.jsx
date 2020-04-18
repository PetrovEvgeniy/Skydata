import React, {Fragment} from 'react';
import aircraftService from '../../../services/aircraft-service';
import { Image, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountryFlag from '../../UI/CountryFlag/CountryFlag';
import Spinner from '../../UI/Spinner/Spinner';
import { faGlobe, faTachometerAlt, faUsers, faEuroSign } from '@fortawesome/free-solid-svg-icons'


class DetailsAircraft extends React.Component {
    state = {
        aircraft: null,
        loading: false,
        isAuthor: false,
        error: null
    }

    nFormatter(num){
        if(num >= 1000000000){
          return (num/1000000000).toFixed(1).replace(/\.0$/,'') + 'G';
        }
        if(num >= 1000000){
          return (num/1000000).toFixed(1).replace(/\.0$/,'') + 'M';
        }
        if(num >= 1000){
          return (num/1000).toFixed(1).replace(/\.0$/,'') + 'K';
        }
        return num;

    }
    

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ loading: true })

        aircraftService.load(id, null)
            .then((data) => this.setState({ 
                aircraft: data, 
                loading: false, 
                isAuthor: data.author}))
            .catch(err => {
                this.setState({ loading: false, error: err.message })
            });

    }
    render() {
        const aircraft = this.state.aircraft;
        let aircraftDetails = <Spinner/>
        if(!this.state.loading && aircraft != null){
            aircraftDetails = (
                <Fragment>
                <h1><small>{aircraft.type}:</small> {aircraft.name}</h1>
                    <Image src={aircraft.imageURL} fluid />
                    <div className="bg-dark text-light">{aircraft.description}</div>
                    <Table responsive striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th><FontAwesomeIcon icon={faGlobe}/> Country:</th>
                                <th><FontAwesomeIcon icon={faTachometerAlt}/> Top Speed:</th>
                                <th><FontAwesomeIcon icon={faUsers}/> Capacity:</th>
                                <th><FontAwesomeIcon icon={faEuroSign}/> Price:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><CountryFlag countryName={aircraft.countryOfOrigin} /></td>
                                <td>{aircraft.topSpeed}</td>
                                <td>{aircraft.capacity}</td>
                                <td>{this.nFormatter(aircraft.price)}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <small>Listed by: </small><strong>{aircraft.creator.username}</strong>
            </Fragment>  
            )
        }
        else if(this.state.aircraft === null && this.state.error){
        aircraftDetails = <h1>Something went wrong</h1>
        }

        return (
            <div className="container">
                {aircraftDetails}
            </div>
        );
    }
}

export default DetailsAircraft;