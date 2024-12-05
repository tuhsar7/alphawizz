import React from 'react'
import { image } from '../Image/image'
import '../Style/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="logo">
            <img src={image.logo} alt="" />
            <p>Lot sum doller sit amet conser tatu raw adping <br/>elit. morbic nec pretinum. morila lorem ane <br/> cost purus utility.</p>
        </div>
        <div className="categories">
            <h4>CATEGORIES <span className='colors'><br/>_______</span></h4>
            <a href="/">Articulture</a>
            <a href="/">Chemical</a>
            <a href="/">Kitchenware</a>
            <a href="/">Furniture</a>
            <a href="/">Coumputer Hardware</a>
        </div>
        <div className="information">
            <h4>INFORMATION <span className='colors'><br/>_______</span></h4>
            <a href="/">About Us</a>
            <a href="/">FAQs</a>
            <a href="/">Terms Of Use</a>

        </div>
        <div className="subscribe">
            <h4>SUBSCRIBE TO OUR NEWSLETTER <span className='colors'><br/>_______</span></h4>
            <p>Please enter email address to create or update <br/> your profile and manage your subcriptions:</p>
            <div className="media">
                <div className="facebook">
                    <a href="https://www.facebook.com/login/"><img src={image.facebook} alt="" /></a>
                </div>
                <div className="instagram">
                   
                    <a href="https://www.instagram.com/"><img src={image.instagram} alt="" /></a>
                </div>
                <div className="youtube">
                   
                    <a href="https://www.youtube.com/"><img src={image.youtube} alt="" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer