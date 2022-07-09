import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";

const NavBar = () => {

    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary mb-3" fixed="top" id="navbar">

        <Container>

            <Navbar.Brand href="/">SMark-Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#profile">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    {/* <Nav.Link href="#/favorites">Favorites</Nav.Link> */}

                    <NavDropdown title="Proyects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#proyect0">
                            E-commerce
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#proyect1">
                            Rick and Morty Wiki
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#proyect2">
                            Farm App
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#proyect3">Pokemon App</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contactme">Contact Me</Nav.Link>


                </Nav>

            </Navbar.Collapse>

        </Container>
        </Navbar>

    );
};

export default NavBar;