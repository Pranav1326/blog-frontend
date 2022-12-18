import axios from 'axios';
import React from 'react';
import './forgotPassword.css';

const ForgotPassword = ({BASE_URL}) => {

    return (
        <div className='login-box'>
            <form action="/" method='post' className="forget-pass-box">
                <h1>Forgot Password</h1>
                <div className="email-div">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required autoComplete='off' 
                        // onChange={e => setEmail(e.target.value)}
                        // value={email}
                        />
                </div>
                <div className="btn-div">
                    <button type='Submit' className='btn'>Submit</button>
                    <button type='Submit' className='btn'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;