import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar sticky="bottom" bg="dark" variant="dark">

            <Navbar.Collapse className="justify-content-center">
                <Navbar.Text>
                    Created by: Evgeniy Petrov© 
                </Navbar.Text>
            </Navbar.Collapse>
    
        </Navbar>
    )
}

export default Footer;