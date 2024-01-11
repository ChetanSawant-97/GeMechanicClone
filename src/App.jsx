import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/commonComponents/Navbar'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/homeComponents/Home'
import NotFound from './components/commonComponents/NotFound';
import FAQ from './components/companyComponents/FAQ';
import Offers from './components/companyComponents/Offers'
import ContactUs from './components/companyComponents/ContactUs';
import Privacy from './components/companyComponents/Privacy';
import Reviews from './components/companyComponents/Reviews';
import Terms from './components/companyComponents/Terms';
import Footer from './components/homeComponents/Footer'
import { Provider } from 'react-redux'; // Ensure this import statement is present
import store from './store';
import CustomToast from './components/commonComponents/toasters/CustomToast';
import CommonDashboard from './components/dashboardComponents/CommonDashboard';
 
function App() {  
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <AppNavbar />
        <CustomToast />
        <Routes>
          <Route path='/not-found' Component={NotFound} />
          <Route path='/faq' Component={FAQ} />
          <Route path='/offers' Component={Offers} />
          <Route path='/contactUs' Component={ContactUs} />
          <Route path='/privacy' Component={Privacy} />
          <Route path='/reviews' Component={Reviews} />
          <Route path='/terms' Component={Terms} />
          <Route path='/dashboard' Component={CommonDashboard} />
          <Route path='/' exact Component={Home} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
      </Provider>     
    </>
  )
}

export default App
