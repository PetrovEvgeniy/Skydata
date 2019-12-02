import React, { Fragment } from 'react';
import Slider from '../components/Slider/Slider';
import Aircraft from '../components/Aircraft/Aircraft';

const HomePage = () => {
    return(
        <Fragment>
            <div className="container">
            <Slider/>
            <hr/>
            <h1 className="text-dark">RECENTLY ADDED AIRCRAFT</h1>
            <Aircraft/>
            </div>
        </Fragment>
    )
}

export default HomePage;