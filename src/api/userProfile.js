import axios from 'axios';
import { USER_UPDATE } from '../features/user/userSlice';

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
        url: `http://localhost:5000/api/user/delete/${data.userId}`,
        method: "DELETE",
        headers: headersList,
        data: bodyContent,
    }
    try{
        const response = await axios.request(reqOptions);
        console.log(response);
        alert(response.data);
    } catch (err) {
        err && alert(err.response.data);
        console.log(err);
    }
}

// User Data Update
export const updateProfile = async (data, profilepic, userId, username, dispatch, navigate) => {
    const config = {
        method: 'PUT',
        url: `http://localhost:5000/api/user/update/${userId}`,
        headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        },
        data : {...data, profilepic, userId}
    };
    try{
        const response = await axios.request(config);
        if(response){
            alert(`User ${username} updated Successfully.`);
            dispatch(USER_UPDATE(response.data));
            navigate('/profile');
        }
    } catch (err) {
        err && alert(err.response.data);
        console.log(err);
    }
}