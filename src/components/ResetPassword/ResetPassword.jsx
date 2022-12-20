import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPasswordAuth } from '../../api/userApi';
import "./resetPassword.css";

const ResetPassword = ({BASE_URL}) => {

    const email = useSelector(state => state.userReducer.forgotPasswordEmail);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setconfirmPassword ] = useState("");
    
    const handleChange = e => {
        setPassword(e.target.value);
    }

    const handleConfirmChange = e => {
        setconfirmPassword(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        if(password === confirmPassword){
            resetPasswordAuth({email, password}, dispatch, navigate);
        }
        else{
            alert(`Password does not match!`);
        }
    }
    
    return (
        <div className='login-box'>
            <form action="/" method='post' onSubmit={handleSubmit} className="reset-pass-form">
                <h1>Reset Password</h1>
                <div className="password-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required autoComplete='off' 
                        onChange={handleChange}
                        value={password}
                    />
                </div>
                <div className="password-div">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="password"required autoComplete='off' 
                        onChange={handleConfirmChange}
                        value={confirmPassword}
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