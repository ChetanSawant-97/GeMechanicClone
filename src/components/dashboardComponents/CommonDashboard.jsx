import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomerDashboard from './CustomerDashboard/CustomerDashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import { useNavigate } from 'react-router-dom';
import { setIsAuthenticated } from '../../features/authSlice';
const CommonDashboard = () => {
  const userAuthToken = sessionStorage.getItem('accessToken');
  const userRole = sessionStorage.getItem('userRole');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if(userAuthToken!=null){
    dispatch(setIsAuthenticated(true));
  }

  const authState = useSelector((state) => state.auth);
  useEffect(() => {
    if (!authState.isAuthenticated) {
      navigate('/');
    }
  }, [authState.isAuthenticated, navigate]);

  return (
    
    <div style={{marginTop:'78px'}}>
        {userRole === "ADMIN" ? <AdminDashboard />  : <CustomerDashboard /> }
    </div>
  )
}

export default CommonDashboard;
