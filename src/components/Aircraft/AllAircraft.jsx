import React from 'react';
import { CardColumns } from 'react-bootstrap';
import AircraftCard from './AircraftCard/AircraftCard';
import Spinner from '../UI/Spinner/Spinner';
import aircraftService from '../../services/aircraft-service';


class AllAircraft extends React.Component {
    state = {
        aircraft: [],
        loading: false,
    }

    componentDidMount() {
        this.setState({ loading: true })

        aircraftService.load()
        .then((data) => {
            this.setState({ aircraft: data, loading: false })
        })
        .catch(error => {
            console.log(error.message)
            this.setState({loading: false})
        });
    }

    render() {
        const aircraft = this.state.aircraft;
        let data = <Spinner/>

        if(!this.state.loading && aircraft.length > 0){
            data = (
                <CardColumns>
                    {aircraft.map((e) =>
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

export default React.memo(AllAircraft);