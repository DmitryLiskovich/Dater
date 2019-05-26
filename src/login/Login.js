import React from 'react';
import render from'react-dom';
import './scss/login.scss';


function Login (){
    return(
        <div className='login' id='login'>
            <div className='login-form'>
                <h2>Sign in with</h2>
                <div className='login-social-list'>
                    <ul>
                        <li><i className='fab fa-vk'></i></li>
                        <li><i className='fab fa-facebook-f'></i></li>
                        <li><i className='fab fa-google'></i></li>
                    </ul>
                </div>
                <h2>OR</h2>
                <div className='login-under-line'></div>
                <form method='POST' action='/login' className = 'login-sign-in-form'>
                    <label>User name or email</label>
                    <input type='email' placeholder='Name' name='userName' className='login-input'></input>
                    <div className='login-input-underline'></div>
                    <label>Password</label>
                    <input type='password' placeholder='Password' name='password' className='login-input'></input>
                    <div className='login-input-underline'></div>
                    <input type='submit' className ='login-submit-btn' value='Submit'></input>
                </form>
            </div>
        </div>
    );
};



export default Login;
