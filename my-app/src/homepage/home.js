import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { ToastContainer } from 'react-toastify';
import { successToast } from '../util';
export const Home = () => {
    const navigate = useNavigate();
    const handlelogout = () => {
        successToast('You have successfully logged out');
        setTimeout(() => {
            navigate('/');
        }, 1000);
        
    };
    return (
        <div class="homepage-container">
         <h1 class="welcome-message">Welcome to the Homepage!</h1>
        <p class="intro-text">You have successfully logged in.</p>
        <button onClick={handlelogout}>Logout</button>
        <ToastContainer />
        </div>
    )
}