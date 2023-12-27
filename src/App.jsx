import { useState } from 'react'
import './App.css'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route path='/not-found' Component={NotFound} />
          <Route path='/faq' Component={FAQ} />
          <Route path='/offers' Component={Offers} />
          <Route path='/contactUs' Component={ContactUs} />
          <Route path='/privacy' Component={Privacy} />
          <Route path='/reviews' Component={Reviews} />
          <Route path='/terms' Component={Terms} />
          <Route path='/' exact Component={Home} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
