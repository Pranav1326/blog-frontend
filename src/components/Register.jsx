import React, { useState } from 'react'
import './styles/register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
const navigate = useNavigate();
const [confirmPassword, setConfirmPassword] = useState("");
const [btnDisabled, setBtnDisabled] = useState(false);
const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    email: ""
});
const handleChange = e => {
    const {name, value} = e.target;
    setRegisterData(preValue => {
        if(name === "username"){
            return{
                username: value,
                password: preValue.password,
                email: preValue.email
            };
        }
        else if(name === "password"){
            return {
                username: preValue.username,
                password: value,
                email: preValue.email
            };
        }
        else if(name === "email"){
            return {
                username: preValue.username,
                password: preValue.password,
                email: value
            };
        }
    });
}
const baseUrl = `http://localhost:5000/api/user/register`;
const handleSubmit = async e => {
    e.preventDefault();
    if(registerData === null){
        alert(`Please enter valid details!`);
    }
    // else if(registerData.username){
    //     const DetectSpace = registerData.username.split(" ");
    //     console.log(DetectSpace);
    //     if(DetectSpace.includes("")){
    //         alert('Cannot allow white space in username!');
    //     }
    // }
    else if(registerData.password !== confirmPassword){
        alert(`Password doen not match!`);
    }
    else{
        try {
            setBtnDisabled(true);
	        const result = await axios.post(baseUrl, registerData);
            result.data && alert(`User ${registerData.username} created successfully.`); navigate('/login');
        } catch (error) {
            setBtnDisabled(false);
            console.log(error);
            if(error.response.data.code === 11000){
                alert(`Email already exist!`);
            }
            else if(error.response.data.message){
                alert(error.response.data.message);
            }
            else if(error.response.data){
                alert(error.response.data);
            }
        }
    }
}
const handleLogin = () => {
    navigate('/login');
}
return (
    <div className='register-box'>
        <form className='register-form' action="/" method='post' onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="username-div">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" required value={registerData.username} onChange={handleChange} maxLength={25}
                // onInput={e => {e.target.value = e.target.value.replace(/^[a-z/\d/]+$/i, '')}}
                />
            </div>
            <div className="email-div">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required value={registerData.email} onChange={handleChange} />
            </div>
            <div className="password-div">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" 
                maxLength={10} minLength={4} required value={registerData.password} onChange={handleChange} />
            </div>
            <div className="password-div">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="confirm-password" 
                maxLength={10} minLength={4}
                required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <div className="btn-div">
                <button type='Submit' 
                    className={btnDisabled ? 'btn-disabled' : 'btn' }
                >
                    Register
                </button>
                <button type='Submit' 
                    className={btnDisabled ? 'btn-disabled' : 'btn' } 
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </form>
    </div>
);
}

export default Register;