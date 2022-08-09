import React, { useRef } from 'react';
import { Row, Card, Col, Container } from 'react-bootstrap';
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useInView } from "framer-motion"



const Home = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const constraintsRef = useRef(null);
    const constraintsRef2 = useRef(null);

    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
        <Container className='mb-5 mt-5 pt-5 pb-5' id='profile'
            ref={ref} 
        >

            <Row lg={2}>
                
                <motion.div
                    initial={{ opacity: 0, x: -550 }}
                    animate={{ opacity: 1, x: isInView ? 0 : -550 }}
                    transition={{ duration: 1.5 }}
                    whileHover={{ scale: 0.8 }}
                    ref={constraintsRef}

                    style={{
                        display: "flex",
                        placeItems: "center",
                        placeContent: "center",
                        borderRadius: 30,
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        perspective: 400
                    }}
                    onMouseMove={handleMouse}
                >
                    <motion.div className="item" 
                        drag dragConstraints={constraintsRef} 
                        
                        style={{
                            
                            borderRadius: 30,
                            backgroundColor: "#fff",
                            rotateX: rotateX,
                            rotateY: rotateY,
                            cursor: "pointer"

                        }}
                    >
                      <Card className='border-light m-5'>

                        <Card.Img
                            style={{
                                
                                pointerEvents: "none",
                                borderRadius: "52px",
                                background: "linear-gradient(45deg, #ffffff, #dedede)",
                                boxShadow: "-50px 50px 100px #212121,50px -50px 100px #ffffff",

                            }}
                            src='./Logos-Imágenes/photostudio-2-designify.png'>

                        </Card.Img>

                    </Card>  
                    </motion.div>
                    
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 550 }}
                    animate={{ opacity: 1, x: isInView ? 0 : 550, display: isInView ? 'block' : 'none' }}
                    transition={{ duration: 1.5 }}
                    whileHover={{ scale: 0.95 }}
                    ref={constraintsRef2}
                >
                    <motion.div className="item"
                        drag dragConstraints={constraintsRef2}
                        style={{cursor: "pointer"}}
                    >
                       <Card className=' border-light text-black'>

                        <Card.Header className='pt-5 pb-5'>
                            <Card.Title>
                                Hi, I'm Rony
                                <br />
                                I'm a Full Stack Web Developer
                            </Card.Title>

                        </Card.Header>

                        <Row className='mt-5' >

                            <Col>
                                <Card.Link href="https://github.com/rony171998" target="_blank" rel="noopener noreferrer">
                                    <Card.Img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt='Github Icon' style={{ width: "25%",pointerEvents: "none" }}></Card.Img>
                                </Card.Link>
                            </Col>
                            <Col>
                                <Card.Link href="https://www.linkedin.com/in/rony-puche-a80275234/" target="_blank" rel="noopener noreferrer">
                                    <Card.Img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt='Linkein Icon' style={{ width: "25%",pointerEvents: "none" }}></Card.Img>
                                </Card.Link>
                            </Col>

                        </Row>

                        <Card.Link href="https://drive.google.com/file/d/1T7fZFlxlmmCT1fLnE9dUQLkp2wTIv5ED/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Card.Img src="https://cdn-icons-png.flaticon.com/512/909/909263.png" alt="Cv Icon" style={{ width: "20%",pointerEvents: "none" }}></Card.Img>
                        </Card.Link>
                                                                                                    
                    </Card> 
                    </motion.div>
                    
                </motion.div>


            </Row>

        </Container>

    );
};

export default Home;