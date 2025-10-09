import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{justifySelf:'left'}}>
      <Container>
        <Navbar.Brand as={Link} to="/">BLANC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <span className="material-icons-outlined" style={{marginTop:"5%", marginLeft:"10%"}}>home</span>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <span className="material-icons-outlined" style={{marginTop:"6%", marginLeft:"10%", fontSize:"21px"}}>shopping_cart</span>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container> 
    </Navbar>
  );
}