import React from "react";
import './survey.css';
import {useRef, useState, useEffect, useContext } from 'react';
import useAuth from "../hooks/useAuth";
import {link ,useNavigate, useLocation } from 'react-router-dom';

import axios from '../api/axios';
import AuthContext from "../context/AuthProvider";
const LOGIN_URL = '/api/v1/admin/addtype';

function Type(){

    const { setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    var getToken = localStorage.getItem('token');
    //console.log(getToken)
    const userRef = useRef();
    const errRef = useRef();

    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    
    useEffect(() => {
        setErrMsg('');
    }, [question1, question2, question3])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const question_id = localStorage.getItem('questionId');
        console.log(question_id)
        
        try{
            const response =await axios.post(LOGIN_URL, ({question1, question2, question3, question_id}),
            {
                headers: {'Authorization': 'Bearer '+getToken}
            }); 
            //console.log(getToken);
            const status =(response?.data.status);
            console.log(status);
            const typeId = (response?.data.id);
            localStorage.setItem('typeId', typeId);
            //setAuth({question1, question2, question3,})
            if (status == 'Success'){
                setErrMsg('Survey Added');   
                alert("Survey created!!")
            }
            
            setQuestion1('');
            setQuestion2('');
            setQuestion3('');
            navigate('/');
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
                <h1>write the questions</h1>
                <input type='text' placeholder="question 1"  ref={userRef} onChange={(e) => setQuestion1(e.target.value)} value={question1} />
                <input type='text' placeholder="question 2"  ref={userRef} onChange={(e) => setQuestion2(e.target.value)} value={question2} />
                <input type='text' placeholder="question 3"  ref={userRef} onChange={(e) => setQuestion3(e.target.value)} value={question3} />
                
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Type;