import React, { useContext, useRef, useState } from 'react';
import './styles/login.css';
import {useNavigate} from 'react-router-dom';
import { Context } from '../context/Context';
import axios from 'axios';

const Login = () => {
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const userRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const { dispatch  } = useContext(Context);
    const baseUrl = `http://localhost:5000/api/user/login`;
    const handleSubmit = async e => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            setBtnDisabled(true);
            const user = userRef.current.value.split(".");
            if(user.includes("admin")){
                setIsAdmin(true);
                console.log(isAdmin);
            }
            else{
                setIsAdmin(false);
                console.log(isAdmin);
            }
            console.log(user);
            const res = await axios.post(baseUrl, {
                username: userRef.current.value,
                password: passwordRef.current.value
            });
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
            navigate('/');
        } catch (error) {
            setBtnDisabled(false);
            alert(error.response.data);
            dispatch({type: "LOGIN_FAILURE"});
        }
    }
    const handleRegister = () => {
        navigate('/register');
    }
    return (
        <div className='login-box'>
            <form className='login-form' action="/" method='post' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="username-div">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required autoComplete='off' 
                         ref={userRef}
                     />
                </div>
                <div className="password-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required autoComplete='off' 
                        ref={passwordRef}
                     />
                </div>
                <div className="forgot-div">
                    <a href="/forgotpassword">Forgot password</a>
                </div>
                <div className="btn-div">
                    <button type='Submit' className={btnDisabled ? 'btn-disabled' : 'btn' }>Login</button>
                    <button type='Submit' className={btnDisabled ? 'btn-disabled' : 'btn' } onClick={handleRegister}>Register</button>
                </div>
            </form>
        </div>
    );
}

export default Login;