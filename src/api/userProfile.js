import axios from 'axios';
import { USER_UPDATE } from '../features/user/userSlice';
import { baseUrl } from './url';

// JWT Token
const token = JSON.parse(localStorage.getItem('token'));
const headersList = {
    "Accept": "*/*",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json" 
}

// User Account Delete
export const deleteAccount = async (data) => {
    const bodyContent = JSON.stringify(data);
    const reqOptions = {
        url: `${baseUrl}/user/delete/${data.userId}`,
        method: "DELETE",
        headers: headersList,
        data: bodyContent,
    }
    try{
        const response = await axios.request(reqOptions);
        alert(response.data);
    } catch (err) {
        err && alert(err.response.data);
    }
}

// User Change Password
export const changePassword = async (data, navigate) => {
    const bodyContent = JSON.stringify(data);
    const reqOptions = {
        url: `${baseUrl}/user/changepassword`,
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }
    try{
        const response = await axios.request(reqOptions);
        alert(response?.data);
        if(response.status){
            navigate('/profile');
        }
    } catch (err) {
        err && alert(err?.response?.data?.message);
    }
}

// User Data Update
export const updateProfile = async (data, userId, username, dispatch, navigate) => {
    const config = {
        method: 'PUT',
        url: `${baseUrl}/user/update/${userId}`,
        headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        },
        data : {...data, userId}
    };
    try{
        const response = await axios.request(config);
        if(response){
            alert(`User ${username} updated Successfully.`);
            dispatch(USER_UPDATE(response.data));
            navigate('/profile');
        }
    } catch (err) {
        err && alert(err?.response?.data);
        console.log(err);
    }
}