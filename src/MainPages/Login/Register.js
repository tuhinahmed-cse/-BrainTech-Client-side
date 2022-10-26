import React, { useContext, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate =useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, photoURL, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/');
            })
            .catch(e => {

                setError(e.message);
            });

    }

    return (
        <div>
            <div style={{ backgroundColor: '#EAFAF1' }}>
                <Container>
                    <Row>
                        <h3 className='mb-5 mt-5' style={{ color: 'goldenrod', fontFamily: 'fantasy' }}> WELCOME TO OUR BRAINTECH REGISTRATION PAGE</h3>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                <Form.Label style={{ color: '#087661', fontSize: '20px', fontWeight: '600' }}>Your Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                            </Form.Group>


                            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                <Form.Label style={{ color: '#087661', fontSize: '20px', fontWeight: '600' }}>Photo URL</Form.Label>
                                <Form.Control type="text" name='photoURL' placeholder="Enter Your Photo URL" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                <Form.Label style={{ color: '#087661', fontSize: '20px', fontWeight: '600' }}>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                                <Form.Label style={{ color: '#087661', fontSize: '20px', fontWeight: '600' }}>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mb-3'>
                                Register
                            </Button>
                            <Form.Text className="text-danger ms-4">
                                {error}
                            </Form.Text>
                            <br></br>
                            <p style={{ color: "goldenrod" }} className='mb-5'> Already Have an account ? <Link to='/login' style={{ border: '2px solid skyblue', padding: '5px', textDecoration: "none", fontWeight: '500', color: 'tomato' }}>Login</Link> </p>

                        </Form>


                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Register;