import React, { Fragment } from 'react';
import Slider from '../components/Slider/Slider';
import RecentAircraft from '../components/Aircraft/RecentAircraft';

const HomePage = () => {
    return(
        <Fragment>
            <div className="container">
            <Slider/>
            <hr/>
            <h1 className="text-dark">RECENTLY ADDED AIRCRAFT</h1>
            <RecentAircraft/>
            </div>
        </Fragment>
    )
}

export default HomePage;