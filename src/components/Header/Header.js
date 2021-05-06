import React from 'react'
import { Navbar, Button, Nav } from 'react-bootstrap'

const Header = () =>  { 

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Small Spells Tarot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="#link">Linker</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header