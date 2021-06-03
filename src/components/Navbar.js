import React from 'react'
import { Button, Container } from '@material-ui/core';

const Navbar = () => {
    return (
        <div className="Navbar">
            <Container>
            <div className="NavBar_Container">
            <a href ="#">
            <img
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="" 
            />
            </a>
            <div className="NavBar_Lists">
                <ul>
                    <li>Our Story</li>
                    <li>Membership</li>
                    <li>Write</li>
                    <li>Sign In</li>
                    <li>
                        <Button class="navbar_button">Get Started</Button>
                    </li>
                </ul>
            </div>
            </div>
            </Container>
        </div>
    )
}

export default Navbar;

