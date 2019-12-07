import React from 'react';
import { CardColumns } from 'react-bootstrap';
import AircraftCard from '../AircraftCard/AircraftCard';
import aircraftService from '../../services/aircraft-service';


class AllAircraft extends React.Component {
    state = {
        aircraft: null
    }

    componentDidMount() {
        
        aircraftService.load().then((data) => this.setState({ aircraft: data }));
    }
    
    render() {
        const aircraft = this.state.aircraft;
        
        return (
            <div className="container">
                {aircraft ? 
                <CardColumns>
                   {aircraft.map((e) => 
                       <AircraftCard key={e._id} id={e._id} name={e.name} type={e.type} description={e.description} imageURL={e.imageURL}/>
                   )}

                </CardColumns>
                :<h1>There aren't any aircraft in the data base</h1>}   
            </div>
        );
    }
}

export default AllAircraft;