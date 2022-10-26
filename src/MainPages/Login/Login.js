import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { providerLogin, signIn, gitProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [error, setError]= useState('');
    const navigate =useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace:true});
            toast.success('Login SucessFully! Thank You')
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
          toast.error(error.message);

        })
    }



const handleGoogleSignIn =()=>{

    providerLogin(googleProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace:true});
        toast.success('Login SucessFully! Thank You')

    })
    .catch(error => console.error(error))

}

const handleGithubSignIn =()=>{

  gitProviderLogin(githubProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace:true});
        toast.success('Login SucessFully! Thank You')

    })
    .catch(error => console.error(error))

}

    
    return (
<div style={{backgroundColor:'#EAFAF1'}}>
    <Container style={{height:'80vh'}}>
        <Row>
            <h3 className='mb-5 mt-5' style={{color:'goldenrod', fontFamily:'fantasy'}}> WELCOME TO OUR BRAINTECH LOGIN PAGE</h3>

        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label style={{color:'#087661', fontSize:'20px',fontWeight:'600'}}>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label style={{color:'#087661', fontSize:'20px',fontWeight:'600'}}>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
    
      <Button variant="primary" type="submit" className='mb-3'>
        Login 
      </Button>
      <Form.Text className="text-danger ms-4">
          {error}
        </Form.Text>
      
      <br></br>
      <p style={{color:"goldenrod"}}> Don't Have an account ? <Link to='/register' style={{border:'2px solid skyblue', padding:'5px', textDecoration:"none", fontWeight:'500', color:'tomato'}}>Register</Link> </p> 
      <Button variant="outline-info" className='me-3' onClick={handleGoogleSignIn} ><FaGoogle></FaGoogle> Login With Google</Button>
      <Button variant="outline-secondary" onClick={handleGithubSignIn}><FaGithub></FaGithub> Login With GitHub</Button>

      
    </Form>


        </Row>
    </Container>
</div>
    );
};

export default Login;