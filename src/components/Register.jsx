import React, { useState } from 'react'
import './styles/register.css';

const Register = () => {
    const [registerData, setRegisterData] = useState({
        username: "",
        password: "",
        mobile: ""
    });
    const handleChange = e => {
        const {name, value} = e.target;
        setRegisterData(preValue => {
            if(name === "username"){
                return{
                    username: value,
                    password: preValue.password,
                    mobile: preValue.mobile
                };
            }
            else if(name === "password"){
                return {
                    username: preValue.username,
                    password: value,
                    mobile: preValue.mobile
                };
            }
            else if(name === "mobile"){
                return {
                    username: preValue.username,
                    password: preValue.password,
                    mobile: value
                };
            }
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(registerData);
    }
    return (
        <div className='register-box'>
            <form action="/" method='post' onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="username-div">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required value={registerData.username} onChange={handleChange} />
                </div>
                <div className="password-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required value={registerData.password} onChange={handleChange} />
                </div>
                <div className="mobile-div">
                    <label htmlFor="mobileno">Mobile no</label>
                    <input type="number" name="mobile" id="mobile" required value={registerData.mobile} onChange={handleChange} />
                </div>
                <div className="btn-div">
                    <button type='Submit' className='btn'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;