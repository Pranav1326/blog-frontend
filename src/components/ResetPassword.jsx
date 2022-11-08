import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
import "./styles/resetPassword.css";

const ResetPassword = () => {
const { dispatch  } = useContext(Context);
const navigate = useNavigate();
const email = localStorage.getItem("user");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const baseUrl = `http://localhost:5000/api/user/resetpassword`;
const handleSubmit = async (e) => {
    e.preventDefault();
    if(password === confirmPassword){
        try {
            const res = await axios.put(baseUrl, {email, password});
            if(res.status === 200){
                dispatch({type: "RESET_PASSWORD_SUCCESS"});
                alert('Password reset successfully.');
                navigate('/login');
            }
        } catch (error) {
            alert(error.response.data);      
        }
    }
    else{
        alert(`Password Does not match!`);
    }
}

return (
    <div className='login-box'>
        <form action="/" method='post' onSubmit={handleSubmit} className="reset-pass-form">
            <h1>Reset Password</h1>
            <div className="password-div">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required autoComplete='off' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
            </div>
            <div className="password-div">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="password"required autoComplete='off' 
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    />
            </div>
            <div className="btn-div">
                <button type='Submit' className='btn'>Change Passoword</button>
            </div>
        </form>
    </div>
  )
}

export default ResetPassword;