import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Footer from './Footer'

//home page 
//add requied all homepage componenets
const LandingPage = () => {
    return (
   <div className="landingpage">
      <Navbar/>
      <Slider/>
      <Footer/>
   </div>
  )
}

export default LandingPage