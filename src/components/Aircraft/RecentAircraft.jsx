import React from 'react';
import { CardColumns } from 'react-bootstrap';
import AircraftCard from '../AircraftCard/AircraftCard';
import aircraftService from '../../services/aircraft-service';


class RecentAircraft extends React.Component {
    state = {
        recentAircraft: null
    }

    componentDidMount() {
        //change limit to a number of desired recent posts
        const limit = 3;
        aircraftService.load(null,limit)
        .then((data) => this.setState({ recentAircraft: data }));
        
    }
    render() {
        const recentAircraft = this.state.recentAircraft;
        
        return (
            <div className="container">
                {recentAircraft ? 
                <CardColumns>
                   {recentAircraft.map((e) => 
                       <AircraftCard 
                       key={e._id} 
                       id={e._id} 
                       name={e.name} 
                       type={e.type} 
                       description={e.description} 
                       imageURL={e.imageURL}/>
                   )}

                </CardColumns>
                :<h1>There aren't any aircraft in the database.</h1>}   
            </div>
        );
    }
}

export default RecentAircraft;