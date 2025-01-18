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
    <Navbar expand="lg" className="bg-secondary-subtle end-0 "  style ={{ height:window.innerWidth >= 992? "20vh":"25vh"}}>
      <Container className='bg-secondary-subtle container-fluid'> 

        <Navbar.Brand href="#home"  >
           <img src={logo} className="img-fluid col-lg-3 col-xl-3 col-2 img-rounded p2"  style={{JustifySelf: 'left'}}   alt="" />
            Funky Punk
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav>

            <Nav.Link href="#home">Home</Nav.Link>

            {/* <form class="form-inline" action="/action_page.php">
              <div class="form-group">
                <label for="Search">Search:</label>
                <input type="email" class="form-control" id="email"></input>
              </div>
            </form> */}

            <NavDropdown title="Men" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Two piece suits</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Women" id="basic-nav-dropdown-2">
              <NavDropdown.Item href="#action/3.1">Dresses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jackets</NavDropdown.Item>
            </NavDropdown>

            <Navbar.Brand href="#cart" className='justify-content-right'>
              <img src={cart} class="img-fluid col-lg-3 col-xl-3  col-2 position-absolute end-100 m5 p5" style={{justifySelf:'right', maxWidth: "80px" , maxHeight: "80px" }} alt="cart" />
            </Navbar.Brand>

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
