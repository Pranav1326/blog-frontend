import axios from "axios";

const baseUrl = "https://blog-api-c8j7.onrender.com/api";
// JWT Token
const token = JSON.parse(localStorage.getItem('token'));
const headersList = {
    "Accept": "*/*",
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json" 
}

// Get all the articles
export const getAllArticles = async () => {
    try {
        const res = await axios.get(`${baseUrl}/articles`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

// Get a Specific Article by _id
export const getArticle = async (id, setData) => {
    try {
        const res = await axios.get(`${baseUrl}/articles/${id}`);
        setData(res.data);
    } catch (error) {
        console.log(error);
    }
}

// Get Articles of single Author
export const getArticlesOfAuthor = async (username, setData) => {
    try {
        const res = await axios.get(`${baseUrl}/articles?user=${username}`);
        setData(res.data);
    } catch (error) {
        console.log(error);
    }
}

// Get Author Details
export const getAuthor = async (id, setUser) => {
    try {
        const res = await axios.get(`${baseUrl}/user/${id}`);
        setUser(res.data);
    } catch (error) {
        console.log(error);
    }
}

// Delete an Aritlcle
export const deleteArticle = async (id, data, navigate) => {
    const reqOptions = {
        url: `${baseUrl}/articles/delete/${id}`,
        method: "DELETE",
        headers: headersList,
        data: data,
    }
    try {
        const res = await axios.request(reqOptions);
        console.log(res.data);
        alert(res.data);
        res.response.data && alert(res.response.data);
        res.response.statusText && alert(res.response.statusText);
        if(res.data.status === 200){
            navigate('/');
        }
    } catch (error) {
        console.log(error);
    }
}