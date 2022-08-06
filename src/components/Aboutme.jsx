import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { AnimatePresence, motion } from "framer-motion";


const Aboutme = () => {
    const [selectedId, setSelectedId] = useState(null)
    
    return (
        <Card className='mt-5 mb-5 ' id="aboutme">
            <Card.Header className='bg-primary text-white'>
                <Card.Title >About Me</Card.Title>
            </Card.Header>
            <Card.Body>

                <Card.Text className='textMachine2'
                    style={{ textAlign: 'justify' }}
                >

                    <br />
                    Soy Desarrollador web Fullstack egresado de <Card.Link href='https://www.academlo.com/' target="_blank" rel="noopener noreferrer">Academlo</Card.Link>   con gran pasión por la
                    Programación, Tecnologia, Fitness y GeoEconomia
                    <br />

                    <br />
                    Tengo gran capacidad para adaptarme a todo
                    tipo de entornos y aportar siempre lo mejor de mí. Me
                    caracterizo por mi facilidad para el trabajo en equipo y mi
                    entusiasmo por aprender y desarrollar mis habilidades.

                </Card.Text>
                <Row className='m-5'>
                    <Col  >


                        <Card>
                            <Card.Body>


                                <motion.div
                                    layout
                                    onClick={() => setSelectedId(1)}
                                    className="box"
                                    animate={{
                                        scale: [0.5, 0.7, 0.7, 0.5, 0.5],
                                        rotate: [0, 90, 180, 240, 360],
                                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        delay: 5
                                    }}
                                >
                                    <Card.Img style={{ width: "10rem" }} src='./Logos-Imágenes/logo-sena.jpg' />

                                </motion.div>

                                <br />
                                SENA
                                2017 - 2018

                            </Card.Body>
                            <AnimatePresence>
                                {

                                    selectedId === 1 &&
                                    <motion.div
                                        layout
                                    >
                                        <motion.button onClick={() => setSelectedId(null)} >x</motion.button>
                                        <Card.Img style={{ width: "10rem" }} src='./Logos-Imágenes/certificadosena.png'></Card.Img>
                                        
                                    </motion.div>

                                }
                            </AnimatePresence>

                        </Card>

                    </Col>
                    <Col >
                        <Card>
                            <Card.Body >

                                <motion.div
                                    layout
                                    layoutId={2}
                                    onClick={() => setSelectedId(2)}
                                    className="box"
                                    animate={{
                                        scale: [0.5, 0.7, 0.7, 0.5, 0.5],
                                        rotate: [0, 90, 180, 240, 360],
                                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        delay: 5
                                    }}
                                >
                                    <Card.Img style={{ width: "10rem" }} src='./Logos-Imágenes/logo_academlo 5.png'></Card.Img>

                                </motion.div>

                                <br />
                                Academlo
                                2022/2 - 2022/8

                            </Card.Body>
                            <AnimatePresence>
                                {

                                    selectedId === 2 &&
                                    <motion.div>
                                        <motion.button onClick={() => setSelectedId(null)} >x</motion.button>
                                        <Card.Img style={{ width: "20rem" }} src='./Logos-Imágenes/certificado.png'></Card.Img>
                                        
                                    </motion.div>

                                }
                            </AnimatePresence>

                        </Card>

                    </Col>
                    <Col>
                        <Card >
                            <Card.Body>

                                <motion.div
                                    layout
                                    onClick={() => setSelectedId(3)}
                                    className="box"
                                    animate={{
                                        scale: [0.5, 0.7, 0.7, 0.5, 0.5],
                                        rotate: [0, 90, 180, 240, 360],
                                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,

                                    }}
                                >
                                    <Card.Img style={{ width: "10rem" }} src='./Logos-Imágenes/logo_upc.png'></Card.Img>

                                </motion.div>
                                <br />
                                Universida Popular del cesar
                                2019 - 2023



                            </Card.Body>
                            <AnimatePresence>
                                {

                                    selectedId === 3 &&
                                    <motion.div>
                                        <motion.button onClick={() => setSelectedId(null)} >x</motion.button>
                                        <Card.Img style={{ width: "10rem" }} src='./Logos-Imágenes/logo_upc.png'></Card.Img>
                                        
                                    </motion.div>

                                }
                            </AnimatePresence>
                        </Card>

                    </Col>

                </Row>
                <Card.Text>  A continuación te presento algunas de las tecnologías que manejo y mis proyectos creados.
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Aboutme;