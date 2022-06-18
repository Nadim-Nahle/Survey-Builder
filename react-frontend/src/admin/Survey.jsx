import React from "react";
import './survey.css';
import {useRef, useState, useEffect, useContext } from 'react';
import useAuth from "../hooks/useAuth";
import {link ,useNavigate, useLocation } from 'react-router-dom';

import axios from '../api/axios';
import AuthContext from "../context/AuthProvider";
const LOGIN_URL = '/api/v1/admin/addsurvey/';

function Survey(){

    const { setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    var getToken = localStorage.getItem('token');
    //console.log(getToken)
    const userRef = useRef();
    const errRef = useRef();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    
    useEffect(() => {
        setErrMsg('');
    }, [title, description])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response =await axios.post(LOGIN_URL, ({title, description, }),
            {
                headers: {'Authorization': 'Bearer '+getToken}
            }); 
            //console.log(getToken);
            const status =(response?.data.status);
            console.log(status);
            const surveyId = (response?.data.id);
            //console.log(surveyId)
            setAuth({title, description, surveyId})
            if (status == 'Success'){
                setErrMsg('Survey Added');   
                alert("Survey Added!!")
            }
            
            setTitle('');
            setDescription('');
            navigate('/admin/questions');
        }
        catch (err){
            
            if(!err?.response){
                setErrMsg('No server response');
            }
            
            errRef.errMsg.focus();
        }
        
    
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="survey">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Add Survey</h1>
                <input type='text' placeholder="Title" ref={userRef} onChange={(e) => setTitle(e.target.value)} value={title}  />
                <input type='text' placeholder="Description" ref={userRef} onChange={(e) => setDescription(e.target.value)} value={description}  />
                <button>Submit</button>
            </div>
        </form>       
                   
    )
    
}
export default Survey