import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../api/userApi';
import './forgotPassword.css';

const ForgotPassword = ({BASE_URL}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ userData, setUserData ] = useState();

    const resetPassword = useSelector(state => state.userReducer.resetPassword);
    console.log(resetPassword);

    // Deseabling Buttons while API calls
    const [btnDisabled, setBtnDisabled] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnDisabled(true);
        forgotPassword(userData, dispatch, navigate);
    }

    const navigateToLogin = () => {
        navigate('/login');
    }
    
    return (
        <div className='login-box'>
            <form action="/" method='post' onSubmit={handleSubmit} className="forget-pass-box">
                <h1>Forgot Password</h1>
                <div className="email-div">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required autoComplete='off' 
                        onChange={e => setUserData(e.target.value)}
                        value={userData}
                    />
                </div>
                <div className="btn-div">
                    <button type='Submit' disabled={btnDisabled} className='btn'>Submit</button>
                    <button type='Submit' disabled={btnDisabled} className='btn' onClick={navigateToLogin}>Login</button>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;