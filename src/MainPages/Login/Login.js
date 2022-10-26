import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();



const handleGoogleSignIn =()=>{

    providerLogin(googleProvider)
    .then(result => {
        const user = result.user;
        console.log(user);

    })
    .catch(error => console.error(error))

}

    
    return (
<div style={{backgroundColor:'#EAFAF1'}}>
    <Container style={{height:'80vh'}}>
        <Row>
            <h3 className='mb-5 mt-5' style={{color:'goldenrod', fontFamily:'fantasy'}}> WELCOME TO OUR BRAINTECH LOGIN PAGE</h3>

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
        Login 
      </Button>
      <br></br>
      <p style={{color:"goldenrod"}}> Don't Have an account ? <Link to='/register' style={{border:'2px solid skyblue', padding:'5px', textDecoration:"none", fontWeight:'500', color:'tomato'}}>Register</Link> </p> 
      <Button variant="outline-info" className='me-3' onClick={handleGoogleSignIn} ><FaGoogle></FaGoogle> Login With Google</Button>
      <Button variant="outline-secondary"><FaGithub></FaGithub> Login With GitHub</Button>
    </Form>


        </Row>
    </Container>
</div>
    );
};

export default Login;