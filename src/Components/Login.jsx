import React, { useState } from 'react'
import '../Style/Login.css'
import { image } from '../Image/image'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {

    /*hooks for CURD opration*/
    let [mobile,setmobile]=useState("")
    let [password,setpassword] = useState("")

    /* after login navigate to other page*/
    let nav = useNavigate()
    /*fetch api*/
    function verify(e){
    e.preventDefault()
    axios.post(`https://developmentalphawizz.com/jewelry_app/app/v1/api/login?mobile=${mobile}&password=${password}`)

    .then((res)=>{
        alert("Login Successfull")
        nav('/')

    })
    .catch((err)=>{
        alert("Login Fail")
    })

  }
  return (
    /*handel login main page*/
    <div className="loginpage">
        
       <div className="loginpage1">
            <div className="imagemain">
                
                <div className="backarrow">
                    <Link to='/'><img src={image.arrow} alt="" /></Link>
                </div>
              
            <div className="image">
                    <img src={image.login} alt="" />
            </div>
        </div>
            
            <div className='login'>
            
            <form onSubmit={verify} action="">
                
                <Link to='/'><img src={image.logo} alt="" /></Link>
                
                <label htmlFor="">  
                    MOBILE
                </label>
                <input type="text" value={mobile} onChange={(e)=>{setmobile(e.target.value)}} placeholder='Enter the email' required />
                
                <label htmlFor="">
                    PASSWOD
                </label>
                <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}}  placeholder='Enter the password' required />
                <button className='btn btn-primary' >Login</button>

            </form>
            
          <p >Are you the new user ? <Link to="/register" >Register here..</Link></p>
        </div>
       </div>
     </div>
  )
}

