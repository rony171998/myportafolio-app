import React from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import { Col, Container, ModalTitle, ProgressBar, Row } from 'react-bootstrap';

const Skills = () => {
    return (

        <Container className='mb-3'>
            <h1>Skills</h1>
            <Row>
                <Col>
                    <h3>Frontend</h3>
                    <ModalTitle>HTML</ModalTitle>
                    <ProgressBar>
                        <ProgressBar animated now={45} /><br />
                    </ProgressBar>
                    <h3>CSS</h3>
                    <ProgressBar>
                        <ProgressBar animated now={55} /><br />
                    </ProgressBar>
                    <h3>JavaScrips</h3>
                    <ProgressBar>
                        <ProgressBar animated now={65} /><br />
                    </ProgressBar>
                    <h3>React</h3>
                    <ProgressBar>
                        <ProgressBar animated now={75} /><br />
                    </ProgressBar>
                </Col>
                <Col>
                    <h3>Backend</h3>
                    <h4>NODE JS</h4>
                    <ProgressBar>
                        <ProgressBar animated now={45} /><br />
                    </ProgressBar>
                    <h4>Express JS</h4>
                    <ProgressBar>
                        <ProgressBar animated now={55} /><br />
                    </ProgressBar>

                </Col>
                <Col>
                    <h3>Other Skills</h3>
                    <h4>Git</h4>
                    <ProgressBar>
                        <ProgressBar animated now={45} /><br />
                    </ProgressBar>
                    <h4>Flutter</h4>
                    <ProgressBar>
                        <ProgressBar animated now={55} /><br />
                    </ProgressBar>

                </Col>
            </Row>

        </Container>

    );
};

export default Skills;