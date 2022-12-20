import axios from 'axios';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS ,FORGOT_PASSWORD_FAILURE, RESET_PASSWORD_SUCCESS, RESET_PASSWORD, RESET_PASSWORD_FAILURE } from '../features/user/userSlice';

// Login
export const login = async (data, dispatch, navigate) => {
    dispatch(LOGIN_START());
    try {
        const res = await axios.post("http://localhost:5000/api/user/login", data);
        dispatch(LOGIN_SUCCESS(res.data));
        localStorage.setItem("user", JSON.stringify(res.data.userInfo));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate('/');
    } catch (error) {
        console.log(error);
        error && alert(error.response.data);
        dispatch(LOGIN_FAILURE());
    }
}

// Logout
export const logout = async (dispatch, navigate) => {
    dispatch(LOGOUT());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate('/');
}

// Register
export const register = async (data, navigate) => {
    try{
        const res = await axios.post("http://localhost:5000/api/user/register", data);
        console.log(res);
        navigate('/login');
    } catch (err) {
        err && alert(err.response.data);
        console.log(err);
    }
}

// Forgot Password
export const forgotPassword = async (data, dispatch, navigate) => {
    dispatch(FORGOT_PASSWORD(data));
    try {
        const res = await axios.post("http://localhost:5000/api/user/forgotpassword", {email: data});
        alert(res.data);
        navigate('/authforgotpassword');
    } catch (error) {
        error && alert(error.response.data);
        console.log(error);
        dispatch(FORGOT_PASSWORD_FAILURE());
    }
}

// Authenticate OTP
export const authenticateOtp = async (data, dispatch, navigate) => {
    try {
        const res = await axios.post("http://localhost:5000/api/user/forgotpassword", {email: data});
        if(res){
            dispatch(FORGOT_PASSWORD_SUCCESS(res.data));
            navigate('/resetpassword');
        }
    } catch (error) {
        error && alert(error.response.data);
        console.log(error);
        dispatch(FORGOT_PASSWORD_FAILURE());
    }
}

// Reset Password after auth by OTP
export const resetPasswordAuth = async (data, dispatch, navigate) => {
    dispatch(RESET_PASSWORD());
    try {
        const res = await axios.put(`http://localhost:5000/api/user/resetpassword`, data);
        if(res){
            alert(`Password reseted Successfully.`);
            dispatch(RESET_PASSWORD_SUCCESS(res.data));
            navigate('/login');
        }
    } catch (error) {
        error && alert(error.response.data);
        console.log(error);
        dispatch(RESET_PASSWORD_FAILURE());
    }
}