import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { motion } from "framer-motion";
import Animate from './Animate';
import { useEffect } from 'react';

const Aboutme = () => {
    
    const [selectedId, setSelectedId] = useState(null)
    const [darkmode, setDarkmode] = useState(document.getElementsByClassName("dark").length)    

    useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const currentMode = JSON.parse(json);
        if (currentMode) {
            setDarkmode(true);
        } else {
            setDarkmode(false);
        }
    }, [])

    const infoaboutme = [
        {
            title: 'About Me',
            description:
                "Soy Desarrollador web Fullstack egresado de Academlo con gran pasión por la" +
                "Programación, Tecnologia, Fitness y GeoEconomia Tengo gran capacidad para adaptarme a todo tipo de entornos y aportar siempre lo mejor de mí. Me" +
                "caracterizo por mi facilidad para el trabajo en equipo y mi" +
                "entusiasmo por aprender y desarrollar mis habilidades"
            ,

            images: [
                {

                    image: "./Logos-Imágenes/logo_upc.png",
                    description: "UPC 2019-2023",
                    certificate: ["./Logos-Imágenes/carnetUpc.png"]
                },
                {

                    image: "./Logos-Imágenes/logo-sena.jpg",
                    description: "Sena 2017-2018",
                    certificate: ["./Logos-Imágenes/certificadosena.png", "./Logos-Imágenes/certificadoinglesbasico.png"]
                },
                {

                    image: "./Logos-Imágenes/logo_academlo 5.png",
                    description: "Academlo 2022/2 - 2022/7",
                    certificate: [
                        "./Logos-Imágenes/certificado.png",
                        "./Logos-Imágenes/certificado JavaScrip.png",
                    ]
                },

            ]
        }
    ]


    return (
        <Card className='my-5 ' id="aboutme" bg={darkmode && "dark"} text={darkmode && 'white'} >
            <Card.Header className='bg-primary text-white'>
                <Card.Title >About Me</Card.Title>
            </Card.Header>

            {
                infoaboutme.map((infoaboutmeItem, index) => {
                    return (
                        <Card.Body key={index}>

                            <Card.Text>{infoaboutmeItem.description}</Card.Text>
                            <Card>
                                <Card.Header><Card.Title>My Studies</Card.Title></Card.Header>
                                <Card.Body>
                                    <Row>
                                        {infoaboutmeItem.images?.map((imagen, index) => (

                                            <Col key={index}>
                                                <motion.div onClick={() => setSelectedId(index)} onHoverStart={() => setSelectedId(index)}>
                                                    <motion.div>
                                                        <Card.Img style={{ width: "10rem", cursor: "pointer" }} src={imagen.image} />

                                                        <Card.Title>{imagen.description}</Card.Title>

                                                    </motion.div>

                                                </motion.div>

                                            </Col>

                                        ))}
                                    </Row>
                                    <Animate selectedId={selectedId} setSelectedId={setSelectedId} infoaboutmeItem={infoaboutmeItem} />

                                </Card.Body>
                            </Card>



                        </Card.Body>
                    )
                })
            }

        </Card>
    );
};

export default Aboutme;