import React from "react";
import './login.css';

function Login(){
    return(
        <div className='container'>
            <div className='center'>
                <h1>Login Form</h1>
                    <form>
                        <div className='txt_field'>
                            <input type='email' id='email-login' className='form-control' name='email' />
                            <label for="email">Email</label>
                        </div>
                        <div className='txt_field'>
                            <input type='password' id='password-login' className='form-control' name='password' />
                            <label for="password">Password</label>
                        </div>
                        <div className='pass'>Forgot password ?</div>
                        <input type='submit' value='login' name='' id='login-btn' />
                        <div className='signup_link'>
                            Nor a member ? <a>Signup</a>
                        </div>
                     </form>
             </div>
        </div>
    )
}
export default Login