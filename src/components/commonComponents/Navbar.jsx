import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaCarAlt } from "react-icons/fa";
import "../../utils/navbar.css"

const MyNavbar = () => {
  
  return (
    <Navbar style={{backgroundColor:"#000000", color:"white", padding:"15px 10px", boxSizing:"borderBox"}} expand="lg" fixed="top">
      
      <Navbar.Brand href="#home">
        <FaCarAlt style={{ fontSize: '2.5rem' }}  />
        <span style={{ fontSize: '1.5rem', paddingLeft:"10px"}}>GoMechanic</span> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: 'white' }}>
        <span className="navbar-toggler-icon" ></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav >
          <Nav.Link  className='nav-links' href="#blog">Blog</Nav.Link>
          <NavDropdown style={{ background: 'black' }} title="More" id="basic-nav-dropdown" className='more-link nav-links' >
            <NavDropdown.Item href="#" className='nav-dropdown-item'>FAQ</NavDropdown.Item>
            <NavDropdown.Item href="#" className='nav-dropdown-item'>Contact Us</NavDropdown.Item>
            <NavDropdown.Item href="#" className='nav-dropdown-item'>Terms</NavDropdown.Item>
            <NavDropdown.Item href="#" className='nav-dropdown-item'>Privacy</NavDropdown.Item>
            <NavDropdown.Item href="#" className='nav-dropdown-item'>Offers</NavDropdown.Item>
            <NavDropdown.Item href="#" className='nav-dropdown-item'>Reviews</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='nav-links nav-login-link' style={{ fontSize: '1.5rem'}} href="#login">Login</Nav.Link>
          <Nav.Link  className='nav-links' href="#register">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
