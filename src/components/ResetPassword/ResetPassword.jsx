import axios from 'axios';
import React from 'react';
import "./resetPassword.css";

const ResetPassword = ({BASE_URL}) => {

    return (
        <div className='login-box'>
            <form action="/" method='post' className="reset-pass-form">
                <h1>Reset Password</h1>
                <div className="password-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required autoComplete='off' 
                        />
                </div>
                <div className="password-div">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="password"required autoComplete='off' 
                        />
                </div>
                <div className="btn-div">
                    <button type='Submit' className='btn'>Change Passoword</button>
                </div>
            </form>
        </div>
    );
}

export default ResetPassword;