import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <div style={{backgroundColor:'skyblue', width:'100%', height:'100vh'}}>

<Container>
    <Row>
        <Col lg='3'>

            <h5 style={{marginTop:'200px', color: 'white'}}>WELCOME TO BRAINTECH</h5>
            <h2 className='text-white'>Best Online Education Expertise</h2>
            <p className='text-white'>Online learning requires more self-regulation, intrinsic motivation and independence from the learner than the traditional classroom education.</p>

            <Button className='mb-3' variant="outline-light">Visit Our All Courses</Button>
            <Button variant="outline-light">Contact with Us for More Info</Button>
        
        </Col>
        
        <Col lg='9'style={{marginTop:'150px'}} >
        <Image className='img-fluid'  src='https://media.istockphoto.com/photos/business-can-not-wait-picture-id1221204650?k=20&m=1221204650&s=612x612&w=0&h=o5ACkYbD8pHjx71Xdgl0NPyySmHk3WsyX3FNFMqCsbU='></Image>
        </Col>
    </Row>
</Container>


</div>
        </div>
      
    );
};

export default Home;