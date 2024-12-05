import React from 'react'
import { image } from '../Image/image'
import '../Style/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    //main div to handel all the elements opf navbar
    <div className="navbar">
        
        <div className="logo">
            <Link to='/'><img src={image.logo} alt="" /></Link>
        </div>
       
        <div className="searchbar">
            
            <img src={image.search} alt="" />
            
            <input type="text" placeholder='Enter product' alt=''/>
        </div>

        
        <div className="add">
            
        <Link to='/login'>
            <div className="login">
            <a href="Lgoin">Login</a>
            </div>
        </Link>
        
        <Link to="/Register">
            <div className="register">
                <a href="Resgister">Register</a>
            </div>
        </Link>
        </div>
    </div>
  )
}

export default Navbar