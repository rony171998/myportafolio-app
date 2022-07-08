import React from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import { Col, Card, Accordion, ProgressBar, Row } from 'react-bootstrap';

const Skills = () => {
    return (

        <Card className='m-5 p-5' id='skills'>
            <Card.Header className='text-white bg-primary mb-5'>Skills</Card.Header>
            
            <Row className='mb-5 p-5'>
                <Col>
                    
                    <Accordion eventKey="0">
                        <Accordion.Item>
                            <Accordion.Header>Frontend</Accordion.Header>
                            <Accordion.Body>
                                <Card.Text>Html</Card.Text>
                                <ProgressBar>
                                    <ProgressBar animated now={95} /><br />
                                </ProgressBar>
                                <Card.Text>Css</Card.Text>
                                <ProgressBar>
                                    <ProgressBar animated now={85} /><br />
                                </ProgressBar>
                                <Card.Text>Javascript</Card.Text>
                                <ProgressBar>
                                    <ProgressBar animated now={95} /><br />
                                </ProgressBar>
                                <Card.Text>React Js</Card.Text>
                                <ProgressBar>
                                    <ProgressBar animated now={95} /><br />
                                </ProgressBar>
                            </Accordion.Body>

                        </Accordion.Item>
                    </Accordion>


                </Col>
                <Col>
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item>
                            <Accordion.Header>Backend</Accordion.Header>
                            <Accordion.Body>
                                <Card.Text>Node Js</Card.Text>
                                <ProgressBar>
                                    <ProgressBar animated now={65} /><br />
                                </ProgressBar>
                                <Card.Text>Express Js</Card.Text>
                                <ProgressBar>
                                    <ProgressBar animated now={55} /><br />
                                </ProgressBar>
                                <Card.Text>SQL</Card.Text>
                                <ProgressBar>
                                    <ProgressBar animated now={55} /><br />
                                </ProgressBar>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    
                </Col>
                <Col>
                    <Accordion defaultActiveKey="2">
                        <Accordion.Item>
                            <Accordion.Header>Others</Accordion.Header>
                            <Accordion.Body>
                                <Card.Text>Git</Card.Text>
                                <ProgressBar>
                                    <ProgressBar animated now={55} /><br />
                                </ProgressBar>
                                <Card.Text>Flutter</Card.Text>
                                <ProgressBar>
                                    <ProgressBar animated now={25} /><br />
                                </ProgressBar>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    

                </Col>
            </Row>

        </Card>

    );
};

export default Skills;