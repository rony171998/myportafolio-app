import React from 'react';
import { Row, Card,Col, Container, CardGroup } from 'react-bootstrap';



const Home = () => {
    return (
            <Container className='mb-5 mt-5 pt-5 pb-5' id='profile'>

                <CardGroup>

                    <Card className='border-light mt-5 mb-5 mx-1 p-5'>

                        <Card.Img
                            style={{
                               
                                borderRadius: "52px",
                                background: "linear-gradient(45deg, #ffffff, #dedede)",
                                boxShadow: "-50px 50px 100px #212121,50px -50px 100px #ffffff",

                            }}
                            src='./Logos-Imágenes/mifoto-removebg-preview.png' className="mifoto">

                        </Card.Img>

                    </Card>
                    <Card className='border-light mb-5 mx-1 p-5'>
                        
                        <Card.Header className='mt-5 pt-5 pb-5'>
                            <Card.Title>Hi, I'm Rony</Card.Title>
                            <Card.Subtitle>I'm a Full Stack Web Developer Stack MERN</Card.Subtitle>
                            <Card.Text></Card.Text>
                            <Card.Text>High level in web design and development knowledge, producing quality work.</Card.Text>

                        </Card.Header>
                        
                        <Row className='mt-5' >
                            
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


                    </Card>
                </CardGroup>
                
            </Container>

    );
};

export default Home;