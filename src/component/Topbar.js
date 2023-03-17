import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import img1 from './img/hehe.png';
import {Link} from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
    <main className='Container' style={{
                   overflow: "hidden",
                   backgroundcolor:"black",
                   position: "fixed",    
                   top: 0,               
                  width: "100%"  }}>
      <Navbar className='bgnav' variant="light"  >
        <Container>
        <Navbar.Brand href="#home">
          <div>

            <img src="./img/hehe.png"
              // width="30"
              // height="30"
              // className="d-inline-block align-top"
              alt="hehe"
            />
          </div>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link className='nav-links' as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link className='nav-links' as={Link} to="/Takethetest">Take the Test</Nav.Link>
            <Nav.Link className='nav-links' as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar></main>
    </>
  );
}

export default ColorSchemesExample;