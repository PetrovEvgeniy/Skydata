import React, { Fragment } from 'react';
import AllAircraft from '../components/Aircraft/AllAircraft';

const AllAircraftPage = () => {
    return(
        <Fragment>
            <div className="container">
                <h2><u>All Aircraft</u></h2>
                <AllAircraft/>
            </div>
        </Fragment>
    )
}

export default AllAircraftPage;