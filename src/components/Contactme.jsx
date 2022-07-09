import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const Contactme = () => {
    return (
        
        <Card className='m-5 p-5' id='contactme'>
            
            <Card.Header className='text-white bg-primary mt-5 mb-5'>Contact Me</Card.Header>
            <Card.Body>
                <Form className="mb-3">

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleTextarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="4" placeholder="Enter your message"  />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={()=>alert("Coming soon")}>
                        Send Message
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Contactme;