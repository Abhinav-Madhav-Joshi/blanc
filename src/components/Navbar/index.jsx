import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{justifySelf:'left',fontFamily:'dauphin'}}>
      <Container>
        <Navbar.Brand href=""><b>BLANC.</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <span class="material-icons-outlined" style={{marginTop:"5%", marginLeft:"10%"}}>home</span>
            <Nav.Link href="/">Home</Nav.Link>
            <span class="material-icons-outlined" style={{marginTop:"6%", marginLeft:"10%", fontSize:"21px"}}>shopping_cart</span>
            <Nav.Link href="#link">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container> 
    </Navbar>
  );
}