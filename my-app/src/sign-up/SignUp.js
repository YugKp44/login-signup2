import React from 'react';
import { Link } from 'react-router-dom';
import'./SignUp.css'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

// import { FaUser } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaLock } from "react-icons/fa";


export const SignUp = () => {

  return (
    <div className='wrapper'>
    <form action="">
         <h1 className='create'>Create New Account</h1>
         <div className='input-box'>
            <input type="text" placeholder='Username'  required/>
            {/* <FaUser className='icon'/> */}
         </div>
         <div className='input-box'>
            <input type="email" placeholder='Email-ID'  required/>
            {/* <MdEmail className='icon'/> */}
         </div>
         <div className='input-box'>
            <input type="password" placeholder='Password'  required/>
            {/* <FaLock  className='icon'/> */}
         </div>
         {/* <div className="remember-forgot">
            <label htmlFor="">
                <input type="checkbox" />
                
            </label>
            <a href="#">Forgot Password</a>
         </div> */}
        
        <div className="Submit-btn1">
        <span className='btn-in'>
          <Link to="/"><span className='inside-txt'>Login</span></Link>
         </span>
        </div>

        {/* <div className="registration-link">
            <p>
                Don't have an account?
                <a href="#">Register here!</a>
            </p>
        </div> */}
        
        
        </form>      
    </div>
  )
}

export default SignUp;
