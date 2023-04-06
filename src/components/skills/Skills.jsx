import React, { useRef, useState } from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import { Col, Card, Accordion, Row, Tabs, Tab } from 'react-bootstrap';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from 'recharts';
import { motion, useInView, Reorder } from 'framer-motion';
import Item from './Item';

const Skills = () => {
    const skills = [
        {
            name: "Front-End",
            Tecnologies: [
                {
                    name: "JavaScript",
                    level: 95
                },
                {
                    name: "React Js",
                    level: 90
                },
                {
                    name: "TypeScript",
                    level: 95
                },
                {
                    name: "Material UI Css",
                    level: 95
                },
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
                    name: "Firebase",
                    level: 70
                }
            ]
        }
    ];
    const ref = useRef(null);
    const isInView = useInView(ref);

    const [items, setItems] = useState(skills.map(skill => skill.Tecnologies.map(item => item.name)));
    //console.log(items);
    return (

        <Card ref={ref}  id='skills'>
            <Card.Header className='bg-primary text-white'>
                <Card.Title >Skills</Card.Title>
            </Card.Header>
            <Tabs defaultActiveKey="home"
                id="justify-tab-example"
                className=""
                justify>
                <Tab eventKey="home" title="Stast Bar">

                    <Row className='py-5 px-3'>
                        {skills.map((skill, index) => {

                            return (
                                <Col key={index}>
                                    <motion.div
                                        animate={{ opacity: isInView ? 1 : 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: index + 1 }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Accordion>
                                            <Accordion.Item>
                                                <Accordion.Header>{skill.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    
                                                    <Reorder.Group axis="y" onReorder={()=> setItems} values={items[index]}>
                                                        {
                                                            items[index].map((item) => (
                                                                <Item key={item} item={item} />
                                                            ))
                                                        }

                                                    </Reorder.Group>
                                                </Accordion.Body>
                                            </Accordion.Item>


                                        </Accordion>

                                    </motion.div>


                                </Col>
                            )
                        })}
                    </Row>

                </Tab>
                <Tab eventKey="Stast Radar" title="Stast Radar">
                    <Row className='p-5' style={{ overflow: "auto" }}>
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