import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBrain } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand ><Link to='/' style={{textDecoration:'none'}} ><FaBrain style={{color:'tomato', height:'30px'}}></FaBrain> <span style={{color:'goldenrod'}}>Brain</span><span className='text-info'>Tech</span> </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" me-auto"  >
            <Nav.Link style={{color:'goldenrod'}} >Courses</Nav.Link>
            <Nav.Link style={{color:'goldenrod'}}>FAQ</Nav.Link>
            <Nav.Link style={{color:'goldenrod'}}>Blog</Nav.Link>
            <Nav.Link style={{color:'goldenrod'}}>Toggle</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;