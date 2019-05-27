import React from 'react';
import render from'react-dom';
import './scss/signup.scss';
import {Link} from 'react-router-dom';


function Signup (){
    return(
        <div className='sign' id='sign'>
            <div className='sign-form'>
                <h2>Create account</h2>
                <form method='POST' action='/sign-up' className = 'sign-sign-in-form'>
                    <i className='fas fa-user sign-input-icon'></i>
                    <input type='text' placeholder='User name' name='userName' required className='sign-input'></input>
                    <div className='sign-input-underline'></div>
                    <i className='fas fa-at sign-input-icon'></i>
                    <input type='email' placeholder='Email' name='userEmail' required className='sign-input'></input>
                    <div className='sign-input-underline'></div>
                    <i className='fas fa-lock sign-input-icon'></i>
                    <input type='password' placeholder='Password' name='password' required className='sign-input'></input>
                    <div className='sign-input-underline'></div>
                    <i className='fas fa-lock sign-input-icon'></i>
                    <input type='password' placeholder='Confirm password' name='confirmPassword' required className='sign-input'></input>
                    <div className='sign-input-underline'></div>
                    <input type='submit' className ='sign-submit-btn' value='Submit'></input>
                </form>
                <div className='sign-under-line'></div>
                <p>Alredy have an account?</p>
                <Link to='/login'>
                        <p className='login-form-sign-up'>LOG IN</p>
                </Link>
            </div>
        </div>
    );
};



export default Signup;
