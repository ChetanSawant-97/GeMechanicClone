import React from 'react'
import CuratedCustomeServices from './CustomServices/CuratedCustomeServices'
import WelcomeComponent from './WelcomeComponent'
import OurServices from './OurServices'
import Workshops from './Workshops'
import HowMechComponent from './HowMechComponent'
import Testimonials from './testimonials/Testimonials'
import CommonQuestion from './commonQuestion/CommonQuestion'
import WhyGoMechanic from './WhyGoMechanic'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
      <WelcomeComponent />
      <OurServices />
      <CuratedCustomeServices />
      <Workshops />
      <HowMechComponent /> 
      <Testimonials />
      <CommonQuestion />
      <WhyGoMechanic />
      <Footer />
    </div>
  )
}

export default Home
