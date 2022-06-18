import React from "react";
import Login from "./admin/Login";
import Survey from "./admin/Survey";
import {Routes, Route, Router} from 'react-router-dom';
import Signup from "./admin/signup";
import Layout from "./Layout";
import Home from "./Home";


function App() {
  return (
      <Routes>
      <Route path="/" element ={<Layout />}>
        /* public routes */
        <Route path="login" element ={<Login />} />
        <Route path="aignup" element ={<Signup />} />

        /* protected routes */
        <Route path="survey" element ={<Survey />} />
        <Route path="/" element ={<Home />} />

        /* 404 roue */

      </Route>
    </Routes>
    
  )
} 

export default App;
 
