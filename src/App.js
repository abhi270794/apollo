import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./component/Landing";
import {NoMatch} from "./component/NoMatch";
import { Login }from "./component/Login";
import { Register} from "./component/Register";
import { HomePage } from "./component/HomePage";
import {Doctor } from "./component/Doctor"
import './App.css';

function App() {
  return (
  
    
    
    
    <div>
      <Routes>
        <Route  path="/" element={<Landing/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/Doctor" element={<Doctor/>} />
        <Route path="*" element= {<NoMatch/>} />
      </Routes>
      </div>
    
 
    
    
  );
}

export default App;
