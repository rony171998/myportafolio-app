import React, { useRef } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contactme = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current?.[0].value === '') {
      alert('Please enter your data to send the email');
    }else{
        
       emailjs.sendForm('service_368qtqv', 'template_saxi3bn', form.current ,'_svnqpUU3L0cu9360')
      .then((result) => {
          console.log(result.text)
          alert('Email sent! '+result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
         
    
  };

    return (

        <Card className='mb-5 mt-5 pt-5 pb-5' id='contactme'>

            <Card.Header className='text-white bg-primary mt-5 mb-5'>Contact Me</Card.Header>
            <Card.Body>
                <Form className="mb-3" ref={form} onSubmit={sendEmail}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" name="name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleTextarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="4" placeholder="Enter your message" name="message" />
                    </Form.Group>

                    <Button variant="primary" type="submit" id="button" value="Send">
                        Send Email
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Contactme;