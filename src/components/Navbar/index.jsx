import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{justifySelf:'left'}}>
      <Container>
        <Navbar.Brand href="#home">BLANC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <span class="material-icons-outlined" style={{marginTop:"5%", marginLeft:"10%"}}>home</span>
            <Nav.Link href="#home">Home</Nav.Link>
            <span class="material-icons-outlined" style={{marginTop:"6%", marginLeft:"10%", fontSize:"21px"}}>shopping_cart</span>
            <Nav.Link href="#link">Cart</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container> 
    </Navbar>
  );
}