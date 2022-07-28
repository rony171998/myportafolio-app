import React from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import { Col, Card, Accordion, ProgressBar, Row, Tabs, Tab } from 'react-bootstrap';
import { Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis, } from 'recharts';

const Skills = () => {
    const skills = [
        {
            name: "Front-End",
            Tecnologies: [
                {
                    name: "HTML",
                    level: 95
                },
                {
                    name: "CSS",
                    level: 85
                },
                {
                    name: "JavaScript",
                    level: 95
                },
                {
                    name: "React Js",
                    level: 90
                }
            ]
        },
        {
            name: "Back-End",
            Tecnologies: [
                {
                    name: "Node Js",
                    level: 80
                },
                {
                    name: "Express Js",
                    level: 90
                },
                {
                    name: "MongoDB",
                    level: 65
                },
                {
                    name: "PostgreSQL",
                    level: 70
                },
            ]
        }

        ,
        {
            name: "Tools",
            Tecnologies: [
                {
                    name: "Git",
                    level: 60
                },
                {
                    name: "Azure",
                    level: 70
                },
                {
                    name: "Heroku",
                    level: 70
                },
                {
                    name: "Firebase",
                    level: 70

                }
            ]
        }


    ];

    return (

        <Card className='mb-5 pb-5' id='skills'>
            <Card.Header className='text-white bg-primary mb-5'>Skills</Card.Header>

            <Tabs defaultActiveKey="home"
                id="justify-tab-example"
                className=""
                justify>
                <Tab eventKey="home" title="Stast Bar">

                    <Row className='p-5'>
                        {skills.map((skill, index) => {
                            return (
                                <Col key={index}>

                                    <Accordion eventkey={index}>
                                        <Accordion.Item>
                                            <Accordion.Header>{skill.name}</Accordion.Header>

                                            {skill.Tecnologies.map((Tecnology, index) => {
                                                return (
                                                    <Accordion.Body key={index}>
                                                        <Card.Text>{Tecnology.name}</Card.Text>

                                                        <ProgressBar animated now={Tecnology.level} />

                                                    </Accordion.Body>
                                                )
                                            }
                                            )}
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                            )
                        })}
                    </Row>

                </Tab>
                <Tab eventKey="Stast Radar" title="Stast Radar">
                    <Row className='p-5' style={{overflow:"auto"}}>
                        {skills.map((skill, index) => {
                            return (
                                <Col key={index}>

                                    <RadarChart
                                        
                                        width={470}
                                        height={300}
                                        outerRadius="90%"
                                        data={skill.Tecnologies}

                                        
                                    >
                                        <PolarGrid />
                                        <PolarAngleAxis dataKey="name" />
                                        <PolarRadiusAxis />
                                        <Radar name="Mike" dataKey="level" stroke="#000" fill="#000" fillOpacity={0.7} />
                                    </RadarChart>
                                        
                                </Col>
                            )
                        })}

                    </Row>

                </Tab>
            </Tabs>



        </Card>

    );
};

export default Skills;