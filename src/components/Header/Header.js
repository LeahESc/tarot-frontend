import React from 'react'
import { Navbar, Button, Nav } from 'react-bootstrap'

const Header = (props) =>  { 
    
    const navStyle = { 
        fontSize: "1.5rem",
        color: "black",
        fontWeight: "bold"
    }

    const logoStyle = {
        fontSize: "2rem"
    }

    const navLinkStyle = {
        marginLeft: ".75rem"
    }

    if(!props.user.username) { 
    return(
        <Navbar style={navStyle} bg="light" expand="lg">
            <Navbar.Brand style={logoStyle} href="/">Small Spells Tarot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={navLinkStyle} href="/home">Home</Nav.Link>
                    <Nav.Link style={navLinkStyle} href="/Login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
    } else { 
        return(
            <Navbar style={navStyle} bg="light" expand="lg">
                <Navbar.Brand style={logoStyle} href="/">Small Spells Tarot</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={navLinkStyle} href="/home">Home</Nav.Link>
                        <Nav.Link style={navLinkStyle} href="/spread">New Spread</Nav.Link>
                        <Nav.Link style={navLinkStyle} href="/spread">Card of the Day</Nav.Link>
                        <Nav.Link style={navLinkStyle} href="/spread">Past Pulls</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )

    }
}

export default Header