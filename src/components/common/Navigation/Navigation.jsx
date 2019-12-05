import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

<<<<<<< HEAD
const Navigation = ({isLogged}) => {
 
=======
const Navigation = () => {
>>>>>>> 94b2df7268182a7eabfce2b7d874906718c2a510
    return (
        
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Skydata</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/aircraft/all">All Aircraft</Nav.Link>
        {isLogged && <Nav.Link href="/aircraft/create">Create</Nav.Link>}
          </Nav>
          {isLogged ? <Nav>
            <Nav.Link href="/my-profile">My profile</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav> :
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link> 
          </Nav>}
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigation;