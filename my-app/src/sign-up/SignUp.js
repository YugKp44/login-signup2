import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { ToastContainer, toast } from 'react-toastify';

// Error and success handling utilities
const errorToast = (message) => toast.error(message);
const successToast = (message) => toast.success(message);

export const SignUp = () => {
   const [logininfo, setlogininfo] = useState({
      username: '',
      email: '',
      password: '',
   });
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const cleanLoginInfo = (info) => {
      const allowedFields = ['username', 'email', 'password'];
      return Object.keys(info)
         .filter(key => allowedFields.includes(key))
         .reduce((obj, key) => {
            obj[key] = info[key];
            return obj;
         }, {});
   };

   const handlechange = (e) => {
      const { name, value } = e.target;
      setlogininfo(prevState => ({
         ...prevState,
         [name]: value
      }));
   };

   const handlelogin = async (e) => {
      e.preventDefault();
      const { username, email, password } = logininfo;

      if (!username || !email || !password) {
         errorToast('Please fill all the fields');
         return;
      }

      const cleanedInfo = cleanLoginInfo(logininfo);
      setLoading(true);  // Show loading animation

      try {
         const url = "https://login-signup-backend-self.vercel.app/auth/signup";
         const response = await fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(cleanedInfo)
         });

         if (!response.ok) {
            const contentType = response.headers.get('Content-Type');
            let errorText;

            if (contentType && contentType.includes('application/json')) {
               const errorData = await response.json();
               errorText = JSON.stringify(errorData);
            } else {
               errorText = await response.text();
            }

            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
         }

         const result = await response.json();
         successToast('User registered successfully');
         setTimeout(() => {
            navigate('/login');
         }, 4000); // Delay navigation to show success toast

      } catch (error) {
         console.error("Error during signup:", error.message);
         errorToast('An error occurred during signup. Please try again.');
      } finally {
         setLoading(false);  // Hide loading animation
      }
   };

   return (
      <div className='wrapper'>
         <form onSubmit={handlelogin}>
            <h1 className='create1'>Create New Account</h1>
            <div className='input-box'>
               <input
                  onChange={handlechange}
                  type="text"
                  name="username"
                  placeholder='Username'
                  value={logininfo.username}
               />
            </div>
            <div className='input-box'>
               <input
                  onChange={handlechange}
                  type="email"
                  name="email"
                  placeholder='Email-ID'
                  value={logininfo.email}
               />
            </div>
            <div className='input-box'>
               <input
                  onChange={handlechange}
                  type="password"
                  name="password"
                  placeholder='Password'
                  value={logininfo.password}
               />
            </div>
            <div className="Submit-btn1">
               <span className='btn-in'>
                  <button type="submit" disabled={loading}>Sign Up</button>
               </span>
            </div>
            <div className='login'>
               <p>Already have an account? <a href="/login">Login</a></p>
            </div>
            {/* Show loading spinner */}
            {loading && <div className="spinner"></div>}
         </form>
         <ToastContainer />
      </div>
   );
}

export default SignUp;
