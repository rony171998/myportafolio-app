import React, { useState } from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown, Card } from "react-bootstrap";
import { motion } from "framer-motion"
import { useEffect } from "react";

const NavBar = () => {

    const [isDarkMode, setDarkMode] = useState(false);
    const toggleSwitch = () => setDarkMode(!isDarkMode);  

    useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const currentMode = JSON.parse(json);
        if (currentMode) {
        setDarkMode(true);
        } else {
        setDarkMode(false);
        }
                                     
    }, []);

    useEffect(() => {
                          
        if (isDarkMode) {
            document.body.classList.add("bg-dark");
          } else {
            document.body.classList.remove("bg-dark");
            
          }
        const json = JSON.stringify(isDarkMode);
        localStorage.setItem("site-dark-mode", json);
        
    }, [isDarkMode]);

    
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}

        >
            <Navbar className=" navbar-dark bg-primary mb-5"
                fixed="top" expand="lg" id="navbar"
            >

                <Container>
                    <Card.Img src="./Íconos/myIcono.png" alt="logo" style={{ width: "2rem", marginRight: "0.5rem" }} />
                    <Navbar.Brand href="/"> SMark-Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#profile">Home</Nav.Link>

                            <Nav.Link href="#aboutme">About Me</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>

                            <NavDropdown title="Proyects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#proyect0">
                                    E-commerce
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#proyect1">
                                    Rick and Morty Wiki
                                </NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#proyect2">Pokemon App</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contactme">Contact Me</Nav.Link>



                        </Nav>
                        Darkmode :
                        <div className="switch" data-ison={isDarkMode} onClick={toggleSwitch}>
                            <motion.div className="handle" layout transition={spring} />
                        </div>

                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </motion.div>


    );
};

export default NavBar;