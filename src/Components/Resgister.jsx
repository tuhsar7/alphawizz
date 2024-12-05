import React, { useState } from 'react'
import '../Style/Register.css'
import { image } from '../Image/image'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Resgister() {
    //hooks to register user details
    let [company,setcompany] = useState("");
    let [email,setemail] = useState("");
    let [address,setaddress]=useState("");
    let [gstnumber,setgstnumber]=useState("");
    let [othernumber,setothernumber]=useState("");
    let[category,setcategory]=useState("");
    let [partner,setpaetner]=useState("");
    let [state,setstate]=useState("");
    let [city,setcity]=useState("");
    
    //store all detals in one single element
    let data = {company,email,address,gstnumber,othernumber,category,partner,state,city};

    // wait to updat register api
    function addUser(e){
        e.preventDefault();
        axios.post(`https://developmentalphawizz.com/jewelry_app/app/v1/api/login?mobile`)
        .then((res)=>{
            console.log(res.data.data)
            console.log(data);
            alert("User added")
        })
        .catch((err)=>{ 
            console.log(err);
            alert("Invalid Data Format")
        })
    }    

  return (
    //handel register page
    <div className="registerpage">
        
        <div className="backarrow">
            <Link to='/'><img src={image.arrow} alt="" /></Link>
        </div>
        
        <div className="registerpage1">
            <div className="logoregister">
                
            <Link to='/'><img src={image.logo} alt="" /></Link>
            </div>
        <div className="image">
           
            <img src={image.login} alt="" />
        </div>
            <div className="UserRegister">
                
                <form onSubmit={addUser} action="">
                    
                    <label htmlFor="">Company</label>
                    <input
                    type="text"
                    required
                    placeholder="Enter Company Name"
                    value={company}
                    onChange={(e) => setcompany(e.target.value)}
                    />
                    <label htmlFor="">Email</label>
                    <input type="email"
                    required
                    placeholder='Enter Email' 
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    />
                    <label htmlFor="">Address</label>
                    <input type="text" 
                    required
                    placeholder='Enter Address'
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}/>
                    <label htmlFor="">Gst Number</label>
                    <input type="text" 
                    required
                    placeholder='Enter Gst number'
                    value={gstnumber}
                    onChange={(e) => setgstnumber(e.target.value)}
                    />
                    <label htmlFor="">Other Number</label>
                    <input type="number" 
                    required
                    placeholder='Enter Number'
                    value={othernumber}
                    onChange={(e) => setothernumber(e.target.value)}
                    />
                    <label htmlFor="">Category</label>
                    <input type="text" 
                    required
                    placeholder='Enter Category'
                    value={category}
                    onChange={(e) => setcategory(e.target.value)}
                    />
                    <label htmlFor="">Patner</label>
                    <input type="text" 
                    required
                    placeholder='Enter Patner'
                    value={partner}
                    onChange={(e) => setpaetner(e.target.value)}
                    />
                    <label htmlFor="">State</label>
                    <input type="text" 
                    required
                    placeholder='Enter State'
                    value={state}
                    onChange={(e) => setstate(e.target.value)}
                    />
                    <label htmlFor="">City</label>
                    <input type="text" 
                    required
                    placeholder='Enter city'
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    />
                    <button className="btn">Register</button>
                </form>
            </div>
        </div>  
    </div>
  )
}
