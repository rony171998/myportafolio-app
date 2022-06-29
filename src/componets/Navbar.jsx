import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";

const NavBar = () => {

    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">

        <Container>

            <Navbar.Brand href="/">Smart-Mark</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#/news">News</Nav.Link>
                    {/* <Nav.Link href="#/favorites">Favorites</Nav.Link> */}

                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">
                            Smart TV
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                            Smart phone
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                            Computers
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/">Kichen</NavDropdown.Item>
                    </NavDropdown>


                </Nav>

            </Navbar.Collapse>

        </Container>
        </Navbar>

    );
};

export default NavBar;