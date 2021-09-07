import React from 'react';
import styles from "./NavBar.module.css";

// Routing
import { NavLink } from 'react-router-dom';

// UI Icons from "react-icons"
import {FcMoneyTransfer} from "react-icons/fc"

// UI Components
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{
            textAlign: "right"
        }}>
            <Container>
                {/* Logo */}
                <Navbar.Brand>
                    <NavLink
                        to="/"
                        className={styles.NavigationItem}
                    ><h2><FcMoneyTransfer/>{" "}Expenser</h2></NavLink>
                </Navbar.Brand>

                {/* Responsive toggler */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                {/* Responsive element to get toggled */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <NavLink
                                to="/explore"
                                activeClassName={styles.activeStyles}
                                className={styles.NavigationItem}
                            ><h4>Track now</h4>
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink
                                to="/about"
                                activeClassName={styles.activeStyles}
                                className={styles.NavigationItem}
                            ><h4>About</h4></NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink
                                to="/contact"
                                activeClassName={styles.activeStyles}
                                className={styles.NavigationItem}
                            ><h4>Contact</h4></NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
