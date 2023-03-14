import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = Cookies.get("auth_token");
    // console.log(token);
    if (token) {
        // console.log(abcd);
        config.headers = {
            Authorization: `Bearer ${token}`
        }
    } 
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
);

export default api;