import React from "react";
import Login from "./admin/Login";
import Survey from "./admin/Survey";
import {Routes, Route, Router} from 'react-router-dom';
import Signup from "./admin/Signup";
import Layout from "./Layout";
import Home from "./Home";
import RequireAuth from "./admin/RequireAuth";


function App() {
  return (
      <Routes>
      <Route path="/" element ={<Layout />}>
        /* public routes */
        <Route path="admin/login" element ={<Login />} />
        <Route path="admin/signup" element ={<Signup />} />
        <Route path="admin/user" element ={<user />} />
        <Route path="/" element ={<Home />} />
        
        

        /* protected routes */
        <Route element={<RequireAuth />}>
        <Route path="admin/survey" element ={<Survey />} />
        
          
          
        </Route>

        /* 404 roue */

      </Route>
    </Routes>
    
  )
} 

export default App;
 
