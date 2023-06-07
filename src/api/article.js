import axios from "axios";

// const baseUrl = "https://blog-api-c8j7.onrender.com/api";
const baseUrl = "https://blog-api-production-fc2e.up.railway.app/api";
// const baseUrl = "http://localhost:5000/api";
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
        alert(res?.data);
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

// Create an Article
export const createArticle = async (data, navigate) => {
    const reqOptions = {
        url: `${baseUrl}/articles/create/`,
        method: "POST",
        headers: headersList,
        data: data,
    }
    try {
        await axios.request(reqOptions)
            .then(data => {
                console.log(data);
                navigate(`/article/${data?.data?._id}`)
            })
            .catch(err => console.log(err));
    } catch (error) {
        console.log(error);
    }
}


// Update an article
export const updateArticle = async (data, navigate) => {
    const reqOptions = {
        url: `${baseUrl}/articles/update/${data.articleid}`,
        method: "PUT",
        headers: headersList,
        data: data,
    }
    try {
        await axios.request(reqOptions)
            .then(data => {
                console.log(data);
                navigate(`/article/${data?.data?._id}`)
            })
            .catch(err => console.log(err));
    } catch (error) {
        console.log(error);
    }
}