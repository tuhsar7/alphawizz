import React from 'react'
import { image } from '../Image/image'
import '../Style/Slider.css'

const Slider = () => {
  return (
    // i don't fetch api 
    // so i use only one single image
    <div className="silder">
        <img src={image.slider1} alt="" />
    </div>
  )
}

export default Slider