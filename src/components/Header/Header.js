import React, { useContext, useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBrain, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {
        user?.displayName
      }
    </Tooltip>
  );


  return (
    <Navbar className='' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand ><Link to='/' style={{ textDecoration: 'none' }} ><FaBrain style={{ color: 'tomato', height: '30px' }}></FaBrain> <span style={{ color: 'goldenrod' }}>Brain</span><span className='text-info'>Tech</span> </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" me-auto"  >
            <Nav.Link  ><Link to='/course' style={{ color: 'goldenrod', textDecoration: 'none' }}>Courses</Link></Nav.Link>
            <Nav.Link  ><Link to='/faq' style={{ color: 'goldenrod', textDecoration: 'none' }}>FAQ</Link></Nav.Link>
            <Nav.Link  ><Link to='/blog' style={{ color: 'goldenrod', textDecoration: 'none' }}>Blog</Link></Nav.Link>
            <Nav.Link  ><div id={theme}>
              <div className="switch d-flex">
                <label style={{ color: 'goldenrod', marginRight: '10px' }}> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
              </div>
            </div></Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                {user?.photoURL ?
                  <Image
                    style={{ height: '30px' }}
                    roundedCircle
                    src={user?.photoURL}>
                  </Image>
                  : <FaUser></FaUser>
                }
              </OverlayTrigger>


            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {
                                user?.uid ?
                                    
                                        <Button variant="light" onClick={handleLogOut} style={{color:'goldenrod',fontWeight:'700'}}>Log out</Button>
                                    :
                                    <>
                                        <Link to='/login' style={{textDecoration:'none', color:'goldenrod', fontWeight:'700'}}>Login</Link>

                                    </>
                            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;