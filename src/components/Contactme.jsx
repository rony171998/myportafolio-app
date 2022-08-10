import React, { useRef, useState } from 'react';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contactme = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();
    const [showDangerAlert, setshowDangerAlert] = useState(false);
    const [showSuccessAlert, setshowSuccessAlert] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();


        setIsLoading(true);

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        )
            .then((result) => {
                setIsLoading(false);
                console.log(result.text);

                return setshowSuccessAlert(true);

            }, (error) => {
                console.log(error.text);
                return setshowDangerAlert(true);
            });

    }

    return (

        <Card className='m-5' id='contactme'>


            <Card.Header className='bg-primary text-white'>
                <Card.Title >Contact Me</Card.Title>
            </Card.Header>
            {
                !isLoading ?
                    <Card.Body>
                        <Form className="mb-3" ref={form} onSubmit={sendEmail}>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleTextarea">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="4" placeholder="Enter your message" name="message" required />
                            </Form.Group>

                            <Button variant="outline-primary" type="submit" id="button" value="Send">
                                Send Email
                            </Button>


                        </Form>
                        <Alert
                            show={showDangerAlert}
                            variant="danger"
                            className="w-25 mt-3 ml-3 "
                        >
                            Error send Message
                        </Alert>
                        <Alert
                            show={showSuccessAlert}
                            variant="success"
                            className="w-25 mt-3 ml-3 "
                        >
                            Sent Message
                        </Alert>


                    </Card.Body>
                    :
                    <Card>
                        <Card.Img src='https://media3.giphy.com/media/iJOZwC1R7WVxAxs4Gs/giphy.gif?cid=ecf05e47awaeqloov5i1nz3cj4wpkh6vypjqrbcgib4lofk6&rid=giphy.gif&ct=g'></Card.Img>
                        <Card.ImgOverlay><h2>Sending</h2></Card.ImgOverlay>
                    </Card>

            }
        </Card>
    );
};

export default Contactme;