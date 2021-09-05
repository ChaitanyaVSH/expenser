import React from 'react';

// UI Icons from "react-icons"
import {FcMoneyTransfer} from "react-icons/fc"

// UI Components
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* Logo */}
                <Navbar.Brand>
                    <h2><FcMoneyTransfer/>{" "}Expenser</h2>
                </Navbar.Brand>

                {/* Responsive toggler */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                {/* Responsive element to get toggled */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>
                            Track now
                        </Nav.Link>
                        <Nav.Link>
                            About
                        </Nav.Link>
                        <Nav.Link>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
