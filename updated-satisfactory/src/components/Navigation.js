import React, { Component, Fragment } from 'react'
import { Nav, NavDropdown, Navbar }  from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


class Navigation extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="light" variant="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="/meet-shopcat">Meet Shopcat</NavDropdown.Item>
                            <NavDropdown.Item href="/tour-the-shop">Take the Tour</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/apparel-screenprinting">Apparel Screen Printing</NavDropdown.Item>
                            <NavDropdown.Item href="/graphic-design">Graphic Design</NavDropdown.Item>
                            <NavDropdown.Item href="/greek-licensing">Greek Licensing</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Client Tools" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/popular-garmets">Popular Garmets</NavDropdown.Item>
                            <NavDropdown.Item href="/artwork-requirements">Artwork Requierments</NavDropdown.Item>
                            <NavDropdown.Item href="/payment-and-shipping">Payment and Shipping</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/enamel-pins">Enamel Pins</Nav.Link>

                        <Nav.Link href="/quote-request">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

export default Navigation;