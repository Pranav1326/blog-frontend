import axios from "axios";

const baseUrl = "https://blog-api-c8j7.onrender.com/api"

// Get all the articles
export const getAllArticles = async () => {
    try {
        const res = await axios.get(`${baseUrl}/articles`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}