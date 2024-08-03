import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import { ToastContainer, toast } from 'react-toastify';

// Error and success handling utilities
const errorToast = (message) => toast.error(message);
const successToast = (message) => toast.success(message);

export const Login = () => {
   const [logininfo, setlogininfo] = useState({
      email: '',
      password: '',
   });
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const cleanLoginInfo = (info) => {
      const allowedFields = [ 'email', 'password'];
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
    const { email, password } = logininfo;

    if (!email || !password) {
        errorToast('Please fill all the fields');
        return;
    }

    const cleanedInfo = cleanLoginInfo(logininfo);
    setLoading(true);  // Show loading animation

    try {
        const url = "https://login-signup-backend-self.vercel.app/auth/login";
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

        let result;
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            result = await response.json();
        } else {
            result = await response.text();
        }

        // Log the result to see what you receive from the server
        console.log("Server Response:", result);

        if (typeof result === 'string') {
            successToast(result); 
             setTimeout(() => {
                    navigate('/home');
                }, 2000); /// Show success message from server
        } else {
            const { jwtToken, username } = result;

            if (jwtToken && username) {
                successToast('Login successful! Redirecting to home page...');
                //localStorage.setItem('token', jwtToken);
                //localStorage.setItem('LoggedIn User', username);
               // Delay navigation to show success toast
            } else {
                errorToast('Login successful, but missing token or name.');
            }
        }

    } catch (error) {
        console.error("Error during login:", error.message);
        errorToast('An error occurred during login. Please try again.');
    } finally {
        setLoading(false);  // Hide loading animation
    }
};



   return (
      <div className='wrapper1'>
         <form onSubmit={handlelogin}>
            <h1 className='create'>Login</h1>
           
            
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
                  <button type="submit" disabled={loading}> Login</button>
               </span>
            </div>
            <div className='login'>
               <p>Don't have an account? <a href="/signup">Register Here</a></p>
            </div>
            {/* Show loading spinner */}
            {loading && <div className="spinner"></div>}
         </form>
         <ToastContainer />
      </div>
   );
}

export default Login;
