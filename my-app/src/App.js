import logo from "./logo.svg";
import "./App.css";
import {Login }from "./login-page/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {SignUp} from "./sign-up/SignUp";
import { ToastContainer } from "react-toastify";
import { Home } from "./homepage/home";



function App() {
  
    
    
    
  

  return (
    <div className="App">
    
 
      <Router>
      <Routes>
           <Route path="/" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/> } />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
