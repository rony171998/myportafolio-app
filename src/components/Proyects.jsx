import React, {  useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
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
                            whileHover={ { scale: 1.1 } }
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ amount: 0.8 }}
                            
                        >
                            <motion.div variants={cardVariants}>
                                <Card key={index} className='mb-5 text-white bg-primary ' id={"proyect" + index}

                                >
                                    <CardGroup >
                                        <Card className='text-white bg-primary '>

                                            <Card.Body className='cardproyects'>
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
                                        <Card  className='text-white bg-primary'>

                                            <Card.Body>
                                                <motion.div
                                                    layout
                                                    data-isopen={isOpen}
                                                    initial={{ borderRadius: 50 }}
                                                    
                                                    className="parent"
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    
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
                                    </CardGroup>
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