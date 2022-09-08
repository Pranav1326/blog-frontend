import React, { useState } from 'react';
import './styles/login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });
    const handleChange = e => {
        const {name, value} = e.target;
        setLoginData(preValue => {
            if(name === "username"){
                return{
                    username: value,
                    password: preValue.password
                };
            }
            else if(name === "password"){
                return {
                    username: preValue.username,
                    password: value
                };
            }
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(loginData);
    }
    return (
        <div className='login-box'>
            <form action="/" method='post' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="username-div">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required autoComplete='off' value={loginData.username} onChange={handleChange} />
                </div>
                <div className="password-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required autoComplete='off' value={loginData.password} onChange={handleChange}/>
                </div>
                <div className="forgot-div">
                    <a href="/forgotPwd">Forgot password</a>
                </div>
                <div className="btn-div">
                    <button type='Submit' className='btn'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;