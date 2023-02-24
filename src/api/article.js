import axios from "axios";

const baseUrl = "https://blog-api-c8j7.onrender.com/api";

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

// Get Author Details
export const getAuthor = async (id, setAuthor) => {
    try {
        const res = await axios.get(`${baseUrl}/user/${id}`);
        setAuthor(res.data);
    } catch (error) {
        console.log(error);
    }
}