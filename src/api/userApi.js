import axios from 'axios';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../features/user/userSlice';

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
