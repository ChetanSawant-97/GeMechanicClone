import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoCloseCircleSharp } from "react-icons/io5";
import '../../utils/form.css'
import { useLoginUserMutation } from '../../services/customerService';
import { useDispatch, useSelector  } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setIsAuthenticated as setAuthStatus } from '../../features/authSlice';

const LogIn = ({handleLogInClick}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { data, error, isLoading }] = useLoginUserMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =async () => {
    if (validateFormData({username : email, password:password})) {
      try {
        const response = await loginUser({
          username : email,
          password : password
        });
        setUserAuthenticationDetails(response.data);
      } catch (error) {
        toast.error('Login Failed !');
      }
    }
  };

  const validateFormData = (formData) =>{
      return true;
  }

  const setUserAuthenticationDetails = (data) =>{
    dispatch(setAuthStatus(true));
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('userFullName', data.userFullName);
    sessionStorage.setItem('userName', data.userName);
    sessionStorage.setItem('userRole', data.userRole);

    console.log(JSON.stringify(data) + " FROM LOGIN FORM COMP");

    setEmail('');
    setPassword('');
    handleLogInClick(false);
    navigate('/dashboard');
  }

  return (
    
    <div className="login-form" >
        <IoCloseCircleSharp className='pointerCursor' style={{position:"absolute", right:"5%", top:"5%", fontSize:"2em"}} onClick={() => handleLogInClick(false)} />
        <h2 className="py-2 text-center">LogIn</h2>
        
        <div className="mb-3">
            <label for="formGroupEmail" className="form-label">Email address</label>
            <input type="email" style={{background:'black', color:'white'}} value={email} className="form-control field-focus" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </div>
        
        <div className="mb-3">
            <label for="formGroupPassword" className="form-label">Password</label>
            <input style={{background:'black', color:'white'}} type="password" value={password} className="form-control field-focus"  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>

        <div className='py-3 '>
            <Button className='w-100 custom-buttun' style={{backgroundColor:"#B6BBC4"}} variant="light" onClick={handleLogin}>Log In</Button>
        </div>
    </div>
  )
}

export default LogIn
