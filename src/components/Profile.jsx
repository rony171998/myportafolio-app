import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';



const Home = () => {
    return (
            <Container className='m-5 p-5' id='profile'>

                <Row className='mb-5'>
                    <Col>

                        <Card.Img
                            style={{
                               
                                borderRadius: "52px",
                                background: "linear-gradient(45deg, #ffffff, #dedede)",
                                boxShadow: "-50px 50px 100px #212121,50px -50px 100px #ffffff",

                            }}
                            src='./Logos-Imágenes/mifoto-removebg-preview.png' className="mifoto mt-5">

                        </Card.Img>

                    </Col>
                    <Col className='mt-5'>
                        
                        <Card.Header className='m-5 p-5'>
                            <Card.Title className='text-center' >Hi, I'm Rony</Card.Title>
                            <Card.Subtitle className='text-center' >I'm a Full Stack Web Developer</Card.Subtitle>
                        </Card.Header>

                        <Row >
                            
                            <Col><Card.Link href="https://github.com/rony171998" target="_blank" rel="noopener noreferrer">
                                <Card.Img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt='Github Icon' style={{ width: "25%" }}></Card.Img>
                            </Card.Link></Col>
                            <Col><Card.Link href="https://www.linkedin.com/in/rony-puche-a80275234/" target="_blank" rel="noopener noreferrer">
                                <Card.Img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt='Linkein Icon' style={{ width: "25%" }}></Card.Img>
                            </Card.Link></Col>

                        </Row>

                        <Card.Link href="#contactme">
                            <Card.Img className="mail" src="https://cdn-icons-png.flaticon.com/512/2258/2258570.png" alt="Email Icon" style={{ width: "25%" }}></Card.Img>
                            <Card.Text>contactame</Card.Text>
                        </Card.Link>


                    </Col>
                </Row>
            </Container>

    );
};

export default Home;