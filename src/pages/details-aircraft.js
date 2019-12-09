import React, { Fragment } from 'react';
import AircraftDetails from '../components/DetailsAircarft/DetailsAircraft'

const AircraftDetailsPage = (props) => {
    return(
        <Fragment>
            <div className="container">
                <AircraftDetails {...props}/>
            </div>
        </Fragment>
    )
}

export default AircraftDetailsPage;