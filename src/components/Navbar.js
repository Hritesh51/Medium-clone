import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
const NavBar = () => {
    return (
    <div className="Navbar__section">
        <Navbar collapseOnSelect expand="lg" bg="#FFC017">
        <Navbar.Brand href="#home">
            <img 
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt=""
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
       </Nav>
       <Nav className="Navbar__right">
        <Nav.Link href="#">Our Story</Nav.Link>
        <Nav.Link href="#">Membership</Nav.Link>
        <Nav.Link href="#">Write</Nav.Link>
        <Nav.Link href="#">Sign In</Nav.Link>
        <button>Get Started</button>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

export default NavBar;