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
                        <Nav.Link eventKey="1">
                            <NavLink
                                to="/track"
                                activeClassName={styles.activeStyles}
                                className={styles.NavigationItem}
                            ><h4>Track now</h4>
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link eventKey="2">
                            <NavLink
                                to="/about"
                                activeClassName={styles.activeStyles}
                                className={styles.NavigationItem}
                            ><h4>About</h4></NavLink>
                        </Nav.Link>
                        <Nav.Link eventKey="3">
                            <NavLink
                                to="/user"
                                activeClassName={styles.activeStyles}
                                className={styles.NavigationItem}
                            ><h4>Profile</h4></NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;

// CollapseOnSelect to work: https://stackoverflow.com/a/56485081/11399514
