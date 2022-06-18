import './login.css';
import {useRef, useState, useEffect, useContext } from 'react';
import useAuth from "../hooks/useAuth";
import {link ,useNavigate, useLocation } from 'react-router-dom';

import axios from '../api/axios';
const LOGIN_URL = '/api/v1/user/auth/login';

const Login = () => {


    const { setAuth} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    
    useEffect(() => {
        setErrMsg('');
    }, [email, password])
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response =await axios.post(LOGIN_URL, ({email, password})); 
            //console.log(response?.data);
            const jwt = ((response?.data.access_token));
            //console.log(jwt)
            //console.log(JSON.stringify(response));
            setAuth({email, password, jwt})
            setEmail('');
            setPassword('');
            localStorage.setItem('token', jwt);
            //console.log(w);
            navigate(from, { replace: true });



        } catch (err){
            if(!err?.response){
                setErrMsg('No server response');
            }
            else if (err.response?.status === 422){
                setErrMsg('missing email or pssword')
            }
            else if (err.response?.status === 401){
                setErrMsg('Incorrect email or password')
            }
            else{
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
        
        
    }

    return(
        
            
        
        <div className='container'>
            <div className='center'>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Login Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='txt_field'>
                            <input type='email' id='email-login' className='form-control' name='email' ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className='txt_field'>
                            <input type='password' id='password-login' className='form-control' name='password' onChange={(e) => setPassword(e.target.value)}  value={password}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className='pass'>Forgot password ?</div>
                        <button>Login</button>
                        <div className='signup_link'>
                            Nor a member ? <a>Signup</a>
                        </div>
                     </form>
             </div>
        </div>
        
        
    )
}
export default Login