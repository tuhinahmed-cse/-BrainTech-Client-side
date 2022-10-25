import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBrain } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';


const Header = () => {

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };


    return (
        <Navbar className='' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand ><Link to='/' style={{textDecoration:'none'}} ><FaBrain style={{color:'tomato', height:'30px'}}></FaBrain> <span style={{color:'goldenrod'}}>Brain</span><span className='text-info'>Tech</span> </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" me-auto"  >
            <Nav.Link  ><Link to='/course' style={{color:'goldenrod', textDecoration:'none'}}>Courses</Link></Nav.Link>
            <Nav.Link  ><Link to='/faq' style={{color:'goldenrod', textDecoration:'none'}}>FAQ</Link></Nav.Link>
            <Nav.Link  ><Link to='/blog' style={{color:'goldenrod', textDecoration:'none'}}>Blog</Link></Nav.Link>
            <Nav.Link  ><div  id={theme}>
        <div className="switch d-flex">
          <label style={{color:'goldenrod', marginRight:'10px'}}> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div></Nav.Link>
            
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