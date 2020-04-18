import React from 'react';
import {Link} from 'react-router-dom';

const FourOFourPage = () => {
    return (
        <div className="FourOFour">
            <h1>404 - NOT FOUND</h1>
            <img src='https://iruntheinternet.com/lulzdump/images/gifs/guy-riding-model-plane-sitting-on-plane-13863809986.gif?id=' alt='hmmm emoji' />
            <Link className="button" to="/">Go back home</Link>
        </div>
    )
}

export default FourOFourPage;