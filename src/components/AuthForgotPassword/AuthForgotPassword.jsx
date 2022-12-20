import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './authForgotPassword.css';

const AuthForgotPassword = ({BASE_URL}) => {

    const resetPassword = useSelector(state => state.userReducer.resetPassword);
    
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const baseUrl = `${BASE_URL}/user/otpauth`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(otp.length < 4){
            alert(`Please enter proper 4 digit otp!`);
        }
        else{
            try {
                const res = await axios.post(baseUrl, {otp: otp});
                alert(res.data);
                navigate('/resetpassword');
            } catch (error) {
                alert(error.response.data);      
            }
        }
    }

    return (
        <div className='login-box'>
                <form action="/" method='post' onSubmit={handleSubmit} className="auth-otp">
                    <h1>Enter OTP</h1>
                    <div className="email-div">
                        <label htmlFor="otp">OTP</label>
                        <input 
                            type="tel" 
                            name="otp" 
                            id="otp" 
                            required 
                            autoComplete='off' 
                            onChange={e => setOtp(e.target.value)}
                            value={otp}
                            minLength='4'
                            maxLength='4'
                            onInput={(e) =>  {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            }}
                        />
                    </div>
                    <div className="btn-div">
                        <button type='Submit' className='btn'>Submit</button>
                    </div>
                </form>
            </div>
    );
}

export default AuthForgotPassword;