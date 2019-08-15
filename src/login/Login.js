import React from 'react';
import render from'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './scss/login.scss';
import Signup from '../signup/Signup';


function Login (){
    return(
            <div className='login' id='login'>
                <div className='login-form'>
                    <h2>Log in with</h2>
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
                        <i className='fas fa-user login-input-icon'></i>
                        <input type='text' placeholder='Name' name='userName' className='login-input'></input>
                        <div className='login-input-underline'></div>
                        <i className='fas fa-lock login-input-icon'></i>
                        <input type='password' placeholder='Password' name='password' className='login-input'></input>
                        <div className='login-input-underline'></div>
                        <input type='submit' className ='login-submit-btn' value='Submit'></input>
                    </form>
                    <p>No account?</p>
                    <Link to='/sign-up'>
                        <p className='login-form-sign-up'>SIGN UP</p>
                    </Link>
                </div>
            </div>
    );
};



export default Login;
