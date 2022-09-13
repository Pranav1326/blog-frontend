import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {

const navigate = useNavigate();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const baseUrl = `http://localhost:5000/api/user/resetpassword`;
const handleSubmit = async (e) => {
    e.preventDefault();
    if(password === confirmPassword){
        try {
            const res = await axios.put(baseUrl, {username, password});
            if(res.status === 200){
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
        <form action="/" method='post' onSubmit={handleSubmit}>
            <h1>Reser Password</h1>
            <div className="username-div">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" required autoComplete='off' 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />
            </div>
            <div className="password-div">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required autoComplete='off' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
            </div>
            <div className="password-div">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="password" id="password" required autoComplete='off' 
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