import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown,Dropdown } from 'react-bootstrap';
import { IoCarSportOutline } from "react-icons/io5";
import "../../utils/navbar.css"
import LogIn from '../forms/LogIn';
import Registration from '../forms/Registration';
import EnquiryForm from '../forms/EnquiryForm';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { setIsAuthenticated as setAuthStatus } from '../../features/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {otherImg} from '../../assets/constants/ourServiceImg'

const MyNavbar = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userAuthToken = sessionStorage.getItem('accessToken');
  const userFullName = sessionStorage.getItem('userName');
  const userRole = sessionStorage.getItem('userRole');
  
  if(authState ===false && userAuthToken!==''){
    dispatch(setAuthStatus(true));
  }

  const [showLogin, setShowLogin] = useState("none");
  const [showReg, setShowReg] = useState("none");

  const handleLogInClick = (status) =>{
    setShowLogin(status===true?"block":"none");
    setShowReg("none")
  }
  const handleRegClick = (status) =>{
    setShowReg(status===true?"block":"none");
    setShowLogin("none")
  }
  
  const handleLogOut =()=>{
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userRole');
    dispatch(setAuthStatus(false));
  }


  return (
    <>
      <Navbar style={{backgroundColor:"#000000", color:"white", padding:"10px 10px", boxSizing:"borderBox"}} expand="lg" fixed="top">
        <div style={{display:{showLogin}}} >
          <div style={{ display: showLogin }}>
            <div className="overlay"></div>
            <div className="navbar-login">
              <LogIn handleLogInClick = {handleLogInClick} />
            </div>
          </div>
          <div style={{display:showReg}}>
            <div className="overlay"></div>
            <div className="navbar-reg">
              <Registration handleRegClick ={handleRegClick} />
            </div>
          </div>
        </div>
        <Navbar.Brand href="/">
          <IoCarSportOutline style={{ fontSize: '3rem' }}  />
          <span style={{ fontSize: '1.5rem', paddingLeft:"10px"}}>GoMechanic</span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: 'white' }}>
          <span className="navbar-toggler-icon" ></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link  className='nav-links' href="#blog">Blog</Nav.Link>
            <NavDropdown style={{ background: 'black' }} title="More" id="basic-nav-dropdown" className='more-link nav-links' >
              <NavDropdown.Item href="/faq" className='nav-dropdown-item'>FAQ</NavDropdown.Item>
              <NavDropdown.Item href="/contactUs" className='nav-dropdown-item'>Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="/terms" className='nav-dropdown-item'>Terms</NavDropdown.Item>
              <NavDropdown.Item href="/privacy" className='nav-dropdown-item'>Privacy</NavDropdown.Item>
              <NavDropdown.Item href="/offers" className='nav-dropdown-item'>Offers</NavDropdown.Item>
              <NavDropdown.Item href="/reviews" className='nav-dropdown-item'>Reviews</NavDropdown.Item>
            </NavDropdown>

            {userAuthToken === null ?  
              <div className='d-flex'>
                <Nav.Link className='nav-links nav-login-link' style={{ fontSize: '1.5rem'}} onClick={() => handleLogInClick(true)}>Login</Nav.Link>
                <Nav.Link  className='nav-links' onClick={() => handleRegClick(true)}>Register</Nav.Link>
              </div>
            : <div className='d-flex px-2'>
                <div style={{width:'35px'}}><img className='w-100 m-auto' src={otherImg.maleProfile} alt="" /></div>
                <Dropdown as={Nav.Item} align="end">
                  <Dropdown.Toggle as={Nav.Link} id="dropdown-nav-link">
                  </Dropdown.Toggle>
                  <Dropdown.Menu >
                    <Dropdown.Item className='link-dark' href="/dashboard">Dashboard</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className='link-dark' onClick={handleLogOut}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </div>
          }
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
