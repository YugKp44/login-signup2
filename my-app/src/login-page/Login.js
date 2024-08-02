import React from 'react'
import './Login.css'
// import { FaUser } from "react-icons/fa";

// import { FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
import {SignUp} from '../sign-up/SignUp';
import { Link } from 'react-router-dom';






export const Login = () => {



  return (
    <div className='wrapper'>

    <form action="">
         <h1>Login</h1>
         <div className='input-box'>
            <input type="email" placeholder='Email-Id'  required/>
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
        
        <button className='submit-btn' type='submit'>Login</button>

        <div className="registration-link">
            <p>
               <span className='noacc'> Don't have an account?</span>
              <Link to={"/SignUp"}>Register here</Link>
                
            </p>
        </div>
        
        
        </form>  
        {/* <RouterProvider router = {router}/>     */}
    </div>
  )
}

export default Login;
