import React from 'react';
import { CardColumns } from 'react-bootstrap';
import AircraftCard from '../AircraftCard/AircraftCard';

class Aircraft extends React.Component {

    render() {
        return (
            <div className="container">

            <CardColumns>
                <AircraftCard 
                name={"MIG-23"}
                type="Fighter jet"
                imageURL="https://wallpaperaccess.com/full/560705.jpg"
                description="A very popular American fighter jet. It is very deadly and fast."
                 />
                

                <AircraftCard
                name={"HRM-231"}
                type="Combat helicopter"
                imageURL="https://img.gta5-mods.com/q75/images/ah-1z-viper-add-on/1f95b9-Grand%20Theft%20Auto%20V%20Screenshot%202018.03.22%20-%2023.56.03.81.jpg"
                description="A very popular Russian helicopter. It is very deadly and fast." />
                
                <AircraftCard 
                name={"DODO-2304"}
                type="Private plane"
                imageURL="https://s2.best-wallpaper.net/wallpaper/1920x1080/1108/Small-private-aircraft_1920x1080.jpg"
                description="A simple single engine plane that can carry up to 8 people (with 2 pilots)." />
                

            </CardColumns>
            </div>
        );
    }
}

export default Aircraft;