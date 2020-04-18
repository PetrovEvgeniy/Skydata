import React from 'react';
import Slider from '../components/UI/Slider/Slider';
import RecentAircraft from '../components/Aircraft/RecentAircraft';

const HomePage = () => {
    return(
        <div className="container">
        <Slider/>
        <hr/>
        <h1 className="text-dark">RECENTLY ADDED AIRCRAFT</h1>
        <RecentAircraft/>
        </div>
    )
}

export default HomePage;