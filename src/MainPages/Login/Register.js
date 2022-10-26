import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
        <div style={{backgroundColor:'#EAFAF1'}}>
    <Container style={{height:'80vh'}}>
        <Row>
            <h3 className='mb-5 mt-5' style={{color:'goldenrod', fontFamily:'fantasy'}}> WELCOME TO OUR BRAINTECH REGISTRATION PAGE</h3>

        <Form>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label style={{color:'#087661', fontSize:'20px',fontWeight:'600'}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label style={{color:'#087661', fontSize:'20px',fontWeight:'600'}}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className='mb-3'>
        Register
      </Button>
      <br></br>
      <p style={{color:"goldenrod"}}> Already Have an account ? <Link to='/login' style={{border:'2px solid skyblue', padding:'5px', textDecoration:"none", fontWeight:'500', color:'tomato'}}>Login</Link> </p> 

    </Form>


        </Row>
    </Container>
</div>
        </div>
    );
};

export default Register;