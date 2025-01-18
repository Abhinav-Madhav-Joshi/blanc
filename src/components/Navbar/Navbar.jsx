import React from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NewNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


)
}

// <div className='navbar'>
//     <div className="nav-logo">
//         <img src={logo} alt="" />
//         <p>SHOPPER</p>
//     </div>
//     <ul className="nav-menu">
//         <li>Shop<hr/></li>
//         <li>Men</li>
//         {/* <ul className="menClothes">
//             <li>coats</li>
//             <li>jackets</li>
//         </ul> */}
//         <li>Women</li>
//         {/* <ul className="womenClothes">
//             <li>coats</li>
//             <li>dress</li>
//             <li>jackets</li>
//         </ul> */}
//     </ul>
//     <div className="nav-login-cart">
//         <button>Login</button>
//         <img src={cart} alt="" />
//     </div>
// </div>
