import React from 'react';
import { CardColumns } from 'react-bootstrap';
import AircraftCard from './AircraftCard/AircraftCard';
import Spinner from '../UI/Spinner/Spinner';
import aircraftService from '../../services/aircraft-service';


class RecentAircraft extends React.Component {
    state = {
        recentAircraft: [],
        loading: false
    }

    componentDidMount() {

        //change limit to a number of desired recent posts
        const limit = 3;
        aircraftService.load(null,limit)
        .then((data) => this.setState({ recentAircraft: data }));
        
    }
    render() {
        const recentAircraft = this.state.recentAircraft;
        let data = <Spinner/>

        if(!this.state.loading && recentAircraft.length > 0){
            data = (
                <CardColumns>
                    {recentAircraft.map((e) =>
                        <AircraftCard
                        key={e._id}
                        id={e._id}
                        name={e.name}
                        type={e.type}
                        description={e.description}
                        imageURL={e.imageURL} />
                    )}
                </CardColumns>)
        }
        return (
            <div className="container">
                {data}   
            </div>
        );
    }
}

export default RecentAircraft;