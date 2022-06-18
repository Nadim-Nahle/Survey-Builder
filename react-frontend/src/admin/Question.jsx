import React from "react";
import './survey.css';
import {useRef, useState, useEffect, useContext } from 'react';
import useAuth from "../hooks/useAuth";
import {link ,useNavigate, useLocation } from 'react-router-dom';

import axios from '../api/axios';
import AuthContext from "../context/AuthProvider";
const LOGIN_URL = '/api/v1/admin/addquestion/';

function Question(){

    const { setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    var getToken = localStorage.getItem('token');
    //console.log(getToken)
    const userRef = useRef();
    const errRef = useRef();

    const [question_name, setQuestion] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    
    useEffect(() => {
        setErrMsg('');
    }, [question_name])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const survey_id = localStorage.getItem('surveyId');
        console.log(survey_id);
        
        try{
            const response =await axios.post(LOGIN_URL, ({question_name, survey_id }),
            {
                headers: {'Authorization': 'Bearer '+getToken}
            }); 
            //console.log(getToken);
            const status =(response?.data.status);
            console.log(status);
            const questionId = (response?.data.id);
            localStorage.setItem('questionId', questionId);
           
            
            //setAuth({title, description, questionId})
            if (status == 'Success'){
                setErrMsg('question Added');   
                alert("question Added!!")
            }
            
            setQuestion('');
            navigate('/admin/type');
            
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
                <h1>Add question</h1>
                <input type='text' placeholder="title" ref={userRef} onChange={(e) => setQuestion(e.target.value)} value={question_name}  />
                <label>Choose a type from this list:</label>
                <select list="types" name="myBrowser" >
                    <option value="MCQ">Text</option>
                    <option value="Text">MCQ</option>
                    <option value="True Or False">T/F</option>
                </select>
                <button>Submit</button>
                
            </div>
        </form>       
                   
    )
    
}
export default Question