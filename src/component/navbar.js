
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './images/logo.png';
import './navbar.css';
function navbar() {
    return (
      
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary">
                    <Container fluid className="custom-container" style={{marginTop: '1.5vh', marginBottom: '1.5vh', height: '4.7vh'}}>
                        <Navbar.Brand href="#">  <div className="navbar-logo"><img src={logo} alt="Logo"/></div></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{fontSize: '4rem'}}/>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            style={{fontSize: '4rem'}}>
                            <Offcanvas.Header closeButton  style={{fontSize: '2rem'}}>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                   <h2 style={{fontSize: '4rem'}}><span  style={{fontSize: '4rem',color: '#ff6969'}}>g</span>fit</h2>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3" style={{gap: '2rem', fontSize: '1.5rem', pointerEvents: 'auto', fontFamily:'Rubik Dirt'}}>
                                    <Nav.Link href="/#home">Home</Nav.Link>
                                    <Nav.Link href="/#program">Programs</Nav.Link>
                                    <Nav.Link href="#about">About Us</Nav.Link>
                                    <Nav.Link href="/#contact">Contact</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>

            ))}
        </>
    );
}

export default navbar;