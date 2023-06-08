import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../api/userApi';

const Login = ({BASE_URL}) => {

    // State
    const dispatch = useDispatch();

    // For Navigation
    const navigate = useNavigate();
    
    // Internal State
    const [ data, setData ] = useState({
        username: "",
        password: ""
    });
    
    // Deseabling Buttons while API calls
    const [btnDisabled, setBtnDisabled] = useState(false);
    
    // Handling Change of input fields
    const handleChange = e => {
        const { name, value } = e.target;
        setData(preValue => {
            if(name === "username"){
                return{
                    username: value,
                    password: preValue.password
                }
            }
            else if(name === "password"){
                return{
                    username: preValue.username,
                    password: value
                }
            }
        });
    }
    
    // Login Form Event
    const handleLogin = async e => {
        e.preventDefault();
        setBtnDisabled(true);
        login(data, dispatch, navigate);
        setBtnDisabled(false);
    }
    
    // Component
    return (
        <div className='login-box'>
            <form className='login-form' action="/" method='post' onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="username-div">
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                        name="username" 
                        id="username" 
                        required 
                        value={data.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="password-div">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        name="password" 
                        id="password" 
                        required 
                        value={data.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="forgot-div">
                    <a href="/forgotpassword">Forgot password</a>
                </div>
                <div className="btn-div">
                    <button type='Submit' className={btnDisabled ? 'btn-disabled' : 'btn' }>Login</button>
                    <button type='Submit' className={btnDisabled ? 'btn-disabled' : 'btn' } onClick={() => navigate('/register')}>Register</button>
                </div>
            </form>
        </div>
    );
}

export default Login;