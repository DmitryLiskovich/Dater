import React from 'react';
import render from'react-dom';
import './Login.css';


function Login (){
    return(
        <div className='login' id='login'>
            <div className='login-form'>
                <h2>Sign in with</h2>
                <div className='social-list'>
                    <ul>
                        <li><i className='fab fa-vk'></i></li>
                        <li><i className='fab fa-facebook-f'></i></li>
                        <li><i className='fab fa-google'></i></li>
                    </ul>
                </div>
                <h2>OR</h2>
                <div className='under-line'></div>
                <form action='/login' className = 'form'>
                    <label>User name or email</label>
                    <input type='email' placeholder='Name' name='userName' className='input'></input>
                    <label>Password</label>
                    <input type='password' placeholder='Password' name='password' className='input'></input>
                    <input type='submit' className ='submit-btn' value='Submit'></input>
                </form>
            </div>
        </div>
    );
};



export default Login;
