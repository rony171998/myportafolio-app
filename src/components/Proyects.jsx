import React, { useState } from 'react';
import { Button, Card,  Col, Container, Row } from 'react-bootstrap';
import { motion } from "framer-motion";

const cardVariants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.8
        }
    }
};

const Proyects = () => {
    const [isOpen, setIsOpen] = useState(true);

    const proyects = [
        {
            name: 'Personal Trainer Crossfit',
            description: "Se trato de una landing page diseñada para una personal trainer que buscaba promocionar sus servicios en línea y además productos que ofrece de manera virtual como pueden ser planes de entrenamiento personalizados e ebooks.",

            created: "Desarrollada con: React JS , Tailwing Css , TypeScript",
            url: 'https://personaltrainer-crossfit.vercel.app/',
            image: [
                './Logos-Imágenes/personaltrainer.png',
                './Logos-Imágenes/personaltrainer2.png',
            ],
            technologies: [
                './Íconos/physics.png',
                './Íconos/icons8-tailwind-css-64.png',
                './Íconos/icons8-typescript-64.png',
            ]
        },
        {
            name: 'Smart-Mark',
            description: "Desarrollo aplicación web para el manejo de productos online que permite potencializar las ventas online.Mas de +1000 horas de experiencia de desarrollo.",

            created: "Desarrollada con: React JS , Bootstrap , Node JS ,Express JS , PostgreSQL ,Azure Apps",
            url: 'https://smart-mark.netlify.app/',
            image: [
                './Logos-Imágenes/smart-mark.png',
                './Logos-Imágenes/smart-mark 2.png',
            ],
            technologies: [
                './Íconos/physics.png',
                './Íconos/bootstrap.png',
                './Íconos/icons8-node-js-64.png',
                "./Íconos/icons8-postgresql-64.png",
                "./Íconos/icons8-azure-64.png"

            ]
        },
        {
            name: "Graph-tweets (in progress)",
            description: "Desarrollo web scraper para encontrar los tweets mas populares bajo un Criterio de búsqueda para analizar y graficar.Mas de +1M de tweets analizados",
            
            created: "Website created with react js, pure css and python",
            url: "https://graph-tweets.netlify.app/",
            image: [
                "./Logos-Imágenes/Graph-tweets.png",
                "./Logos-Imágenes/Graph-tweets2.png",
            ],
            technologies: [
                './Íconos/physics.png',
                './Íconos/css.png',
                './Íconos/icons8-python-64.png',
            ]
        },
        {
            name: 'E-commerce App',
            description: "E-commerce website for smarphones, smart TV, and other products.",
            created: "Website responsive created with React.js (React-Redux, React-Forms ,React-hooks ,React-Bootstrap,React-Router-Dom, Protectect-Routes)Bootstrap, and ApiRest",
            url: 'https://e-commerce-rony.netlify.app/',
            image: [
                './Logos-Imágenes/E-Commerce.png',
                './Logos-Imágenes/E-commerce2.png',
            ],
            technologies: [
                './Íconos/physics.png',
                './Íconos/bootstrap.png',
                './Íconos/redux.png',

            ]
        },
        {
            name: 'Rick and Morty Wiki',
            description: 'Rick and Morty Wiki is a website that allows you to search for characters and episodes of the show.',
            created: 'Website responsive created with React.js JavaScript , Css, and ApiRest',
            url: 'https://rickandmorty-rony.netlify.app/',
            image: [
                './Logos-Imágenes/rick and morty wiki.png',
                './Logos-Imágenes/rick and morty wiki2.png',
            ],
            technologies: [
                './Íconos/physics.png',
                './Íconos/css.png',
            ]
        }
        ,
        {
            name: 'Pokemon App',
            description: 'Pokemon App is a website that allows you to view pokemons and their stats.',
            created: 'Website responsive created with React.js (React-hooks ,React-Bootstrap,React-Router-Dom, Protectect-Routes) JavaScript , Css, and ApiRest',
            url: 'https://pokemons-rony.netlify.app/',
            image: [
                './Logos-Imágenes/pokemon-Img.png',
                './Logos-Imágenes/pokemon-Img2.png',
            ],
            technologies: [
                './Íconos/physics.png',
                './Íconos/bootstrap.png',
                './Íconos/redux.png',
            ]
        }
    ];

    return (

        <Card className='text-white bg-primary' id='proyects'>
            <Container >
                <Card.Header className='bg-primary text-white'>
                    <Card.Title >Proyects</Card.Title>
                </Card.Header>

                {proyects.map((proyect, index) => {
                    return (

                        <motion.div
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ amount: 0.8 }}

                        >
                            <motion.div variants={cardVariants}>
                                <Card key={index} className='m-5 text-white bg-primary ' id={"proyect" + index}

                                >
                                    <Row >
                                        <Col sm="6">
                                            <Card className='text-white bg-primary cardproyects'>

                                                <Card.Body className=''>
                                                    <Card.Link href={proyect.url} target="_blank" rel="noopener noreferrer">
                                                        <div className='figure'>
                                                            <Card.Img className="card-imgproyects" src={proyect.image[0]} />
                                                            <Card.Img className="card-imgproyect" src={proyect.image[1]} />
                                                        </div>

                                                    </Card.Link>
                                                    <ul className="social-media">

                                                        {proyect.technologies.map((image, index) => {
                                                            return (

                                                                <li key={index}>
                                                                    <Card.Img
                                                                        className="iconimg" src={image} alt="CardIcon">
                                                                    </Card.Img>
                                                                </li>
                                                            )
                                                        }
                                                        )}

                                                    </ul>

                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col >
                                            <Card className='text-white bg-primary'>

                                                <Card.Body>
                                                    <motion.div
                                                        layout
                                                        data-isopen={isOpen}
                                                        initial={{ borderRadius: 50 }}

                                                        className="parent"
                                                        onClick={() => setIsOpen(!isOpen)}
                                                        onHoverStart={() => setIsOpen(true)}
                                                        onHoverEnd={() => setIsOpen(false)}

                                                    >
                                                        <motion.div layout className="child"

                                                        />

                                                        <Card className='text-white bg-primary'>
                                                            <Card.Header><Card.Title>{proyect.name}</Card.Title></Card.Header>
                                                            <Card.Body>

                                                                <Card.Text>{proyect.description}</Card.Text>
                                                                <Card.Text>{proyect.created}</Card.Text>
                                                            </Card.Body>
                                                            <Card.Link href={proyect.url} target="_blank" rel="noopener noreferrer">
                                                                <Button className='text-black bg-light'>Visit Proyect</Button>
                                                            </Card.Link>

                                                        </Card>
                                                    </motion.div>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row>
                                </Card>

                            </motion.div>
                        </motion.div>
                    )
                })}

            </Container>

        </Card>

    );
};

export default Proyects;