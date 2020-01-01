import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/fontawesome-free-solid'

export default props => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand  as={Link} to="/">
            <FontAwesomeIcon icon={faCalendarCheck} />
            Todo App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-center mt-4 mb-4">
                <Nav.Link as={NavLink} to="/todo">
                    Tasks
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                    About
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)