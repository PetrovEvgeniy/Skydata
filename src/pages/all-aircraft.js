import React, { Fragment } from 'react';
import Aircraft from '../components/Aircraft/Aircraft';

const AllAircraftPage = () => {
    return(
        <Fragment>
            <div className="container">
            <h1>All Aircraft</h1>
            <Aircraft/>
            </div>
        </Fragment>
    )
}

export default AllAircraftPage;