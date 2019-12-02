import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

// <nav>
// <a className="active" href="/">Skydata©</a>
// <a href="/aircraft/all">All Aircraft</a>
// <a href="/aircraft/create">Create</a>
// <div id="auth-buttons">
//     <a href="/login">Login</a>
//     <a href="/register">Register</a>
// </div>
// <div id="profile">
//     <a href="/my-profile">My profile</a>
//     <a href="/logout">Logout</a>
// </div>
// </nav>

const Navigation = () => {
    return (
        
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Skydata</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/aircraft/all">All Aircraft</Nav.Link>
            <Nav.Link href="/aircraft/create">Create</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigation;