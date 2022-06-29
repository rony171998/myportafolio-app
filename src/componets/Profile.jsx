import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';



const Home = () => {
    return (
            <Container className='mb-3'>

                <Row>
                    <Col>

                        <Card.Img
                            style={{
                                width: "80%",
                                borderRadius: "52px",
                                background: "linear-gradient(45deg, #ffffff, #dedede)",
                                boxShadow: "-50px 50px 100px #212121,50px -50px 100px #ffffff",

                            }}
                            src='./Logos-Imágenes/mifoto-removebg-preview.png' className="mifoto">

                        </Card.Img>

                    </Col>
                    <Col>

                        <Card.Header className='mb-3'>
                            <h1 >Hi, I'm Rony</h1>
                            <h2>UX/IU Designer</h2>
                            <h2>Full Stack Web Developer</h2>
                        </Card.Header>

                        <Row >
                            
                            <Col><Card.Link href="https://github.com/rony171998" target="_blank" rel="noopener noreferrer">
                                <Card.Img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt='Github Icon' style={{ width: "25%" }}></Card.Img>
                            </Card.Link></Col>
                            <Col><Card.Link href="https://www.linkedin.com/in/rony-puche-a80275234/" target="_blank" rel="noopener noreferrer">
                                <Card.Img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt='Linkein Icon' style={{ width: "25%" }}></Card.Img>
                            </Card.Link></Col>

                        </Row>

                        <Card.Link href="#Contactos">
                            <Card.Img className="mail" src="https://cdn-icons-png.flaticon.com/512/2258/2258570.png" alt="Email Icon" style={{ width: "25%" }}></Card.Img>
                            <Card.Text>contactame</Card.Text>
                        </Card.Link>


                    </Col>
                </Row>
            </Container>

    );
};

export default Home;