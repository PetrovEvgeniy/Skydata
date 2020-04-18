import React from 'react';
import AircraftDetails from '../components/Aircraft/DetailsAircarft/DetailsAircraft'

const AircraftDetailsPage = (props) => {
    return(
        <div className="container">
            <AircraftDetails {...props}/>
        </div>
    )
}

export default AircraftDetailsPage;