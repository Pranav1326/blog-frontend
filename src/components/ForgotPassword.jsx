import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';

const ForgotPassword = () => {

const { dispatch } = useContext(Context);
const navigate = useNavigate();
const [email, setEmail] = useState("");
const baseUrl = `http://localhost:5000/api/user/forgotpassword`;

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(baseUrl, {email});
        dispatch({type: "RESET_PASSWORD"});
        alert(res.data);
        localStorage.setItem("user", email);
        navigate('/authforgotpassword');
    } catch (error) {
        console.log(error);
        alert(error.response.data);      
    }
}

return (
    <div className='login-box'>
        <form action="/" method='post' onSubmit={handleSubmit}>
            <h1>Forgot Password</h1>
            <div className="email-div">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required autoComplete='off' 
                onChange={e => setEmail(e.target.value)}
                value={email}
                    />
            </div>
            <div className="btn-div">
                <button type='Submit' className='btn'>Submit</button>
                <button type='Submit' className='btn' onClick={() => navigate('/login')}>Login</button>
            </div>
        </form>
    </div>
  );
}

export default ForgotPassword;