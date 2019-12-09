import React from 'react';
import {Image} from 'react-bootstrap';
import '../CountryFlag/CountryFlag.css'

export default (props) => {
    let imgURL = "";
    switch(props.countryName){
        case 'USA': imgURL = "https://image.flaticon.com/icons/svg/555/555526.svg"; break;
        case 'Japan': imgURL = "https://image.flaticon.com/icons/svg/555/555646.svg"; break;
        case 'China': imgURL = "https://image.flaticon.com/icons/svg/2151/2151303.svg"; break;
        case 'Russia': imgURL = "https://image.flaticon.com/icons/svg/206/206604.svg"; break;
        case 'Brazil': imgURL = "https://image.flaticon.com/icons/svg/206/206597.svg"; break;
        case 'Canada': imgURL = "https://image.flaticon.com/icons/svg/206/206609.svg"; break;
        case 'France': imgURL = "https://image.flaticon.com/icons/svg/555/555602.svg"; break;
        case 'India': imgURL = "https://image.flaticon.com/icons/svg/206/206606.svg"; break;
        case 'Bulgaria': imgURL = "https://image.flaticon.com/icons/svg/206/206684.svg"; break;
        default: break;
    };

    return <Image id="country-flag" src={imgURL} rounded/>
}