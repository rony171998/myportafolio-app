import React from 'react';
import { Accordion, Button, Card, CardGroup, Container } from 'react-bootstrap';

const Proyects = () => {

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
            name: 'Farm App',
            description: 'Farm App is a website that allows you to managment your farm.',
            created: 'Website responsive created with React.js JavaScript , Css, and ApiRest',
            url: 'https://laprovidencia-web.netlify.app/',
            image: [
                './Logos-Imágenes/farm.png',
                './Logos-Imágenes/farm2.png',
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
            ]
        }

    ];

    return (

        <Card className='text-white bg-primary' id='proyects'>
            <Container >
                <Card.Header className='text-center m-5'>Proyects</Card.Header>
                {proyects.map((proyect, index) => {
                    return (
                        <Card key={index} className='mb-5 text-white bg-primary ' id={"proyect"+index}>
                            <CardGroup >
                                <Card className='text-white bg-primary '>

                                    <Card.Body className='cardproyects'>
                                        <Card.Link href={proyect.url}  target="_blank" rel="noopener noreferrer">
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
                                <Card className='text-white bg-primary'>

                                    <Card.Body>
                                        <Accordion eventkey="0">

                                            <Accordion.Item>
                                                <Accordion.Header>{proyect.name}</Accordion.Header>
                                                <Accordion.Body>

                                                    <Card >
                                                        <Card.Body className='text-white bg-primary'>
                                                            <Card.Text>
                                                                {proyect.description}
                                                            </Card.Text>
                                                            <Card.Text>
                                                                {proyect.created}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>

                                                </Accordion.Body>

                                            </Accordion.Item>
                                        </Accordion>
                                        <Card.Link href={proyect.url}  target="_blank" rel="noopener noreferrer">
                                            <Button className='text-black bg-secondary'>Visit Proyect</Button>
                                        </Card.Link>
                                        
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Card>
                    )
                })}
               
            </Container>

        </Card>

    );
};

export default Proyects;