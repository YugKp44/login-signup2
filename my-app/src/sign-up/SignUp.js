import React from 'react'

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
        
        <button className="submit-btn"type='submit'>login</button>

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
