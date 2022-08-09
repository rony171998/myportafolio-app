import React, { useRef, useState } from 'react';
import { Button, Card, Form , Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contactme = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
        setIsLoading(true);
        
       emailjs.sendForm('service_368qtqv', 'template_saxi3bn', form.current ,'_svnqpUU3L0cu9360')
      .then((result) => {
         setIsLoading(false);
          console.log(result.text);         
         <Alert variant="success">Email sent</Alert>
          
      }, (error) => {
          console.log(error.text);
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