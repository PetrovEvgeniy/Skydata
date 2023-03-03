import React from 'react';
import {Image} from 'react-bootstrap';
import './CountryFlag.css'

export default (props) => {
    let imgURL = "";
    switch(props.countryName){
        case 'USA': imgURL = "https://flagcdn.com/32x24/us.png"; break;
        case 'Japan': imgURL = "https://flagcdn.com/32x24/jp.png"; break;
        case 'China': imgURL = "https://flagcdn.com/32x24/cn.png"; break;
        case 'Russia': imgURL = "https://flagcdn.com/32x24/ru.png"; break;
        case 'Brazil': imgURL = "https://flagcdn.com/32x24/br.png"; break;
        case 'Canada': imgURL = "https://flagcdn.com/32x24/ca.png"; break;
        case 'France': imgURL = "https://flagcdn.com/32x24/fr.png"; break;
        case 'India': imgURL = "https://flagcdn.com/32x24/in.png"; break;
        case 'Bulgaria': imgURL = "https://flagcdn.com/32x24/bg.png"; break;
        default: break;
    };

    return <Image id="country-flag" src={imgURL} rounded/>
}