import { useState } from 'react'
import './App.css'
import AppNavbar from './components/commonComponents/Navbar'
import WelcomeComponent from './components/homeComponents/WelcomeComponent'
import OurServices from './components/homeComponents/OurServices'
import Home from './components/homeComponents/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppNavbar />
      <Home />
    </>
  )
}

export default App
