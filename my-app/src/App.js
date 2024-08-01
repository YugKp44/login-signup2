import logo from "./logo.svg";
import "./App.css";
import {Login }from "./login-page/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {SignUp} from "./sign-up/SignUp";



function App() {
  
  return (
    <div className="App">
    
 
      <Router>
      <Routes>
        
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/" element={<Login/>} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
